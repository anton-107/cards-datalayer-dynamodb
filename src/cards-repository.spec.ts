import {
  CreateTableCommand,
  DynamoDBClient,
  ListTablesCommand,
} from "@aws-sdk/client-dynamodb";
import { CardsRepository } from "cards-model/dist/repository";
import { ChildProcess } from "child_process";
import DynamoDbLocal from "dynamodb-local";

import { CardsRepositoryDynamo } from "./cards-repository";
import { Constants, getStringFromConfig } from "./config/config";
import { CardEntity } from "./dynamodb-toolbox/entity";
import { ShortUUIDCounter } from "./short-uuid-counter";

const sleep = async (sleepMs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, sleepMs));

const setupDynamoLocal = async () => {
  const dynamoLocalPort = 8000;
  const ddbClient = new DynamoDBClient({
    endpoint: `http://127.0.0.1:${dynamoLocalPort}`,
  });
  const dynamoLocalProcess = await DynamoDbLocal.launch(
    dynamoLocalPort,
    null,
    [],
    false,
    true,
  );

  // wait for local dynamo to initialize:
  for (let retries = 0; retries <= 5; retries += 1) {
    try {
      await ddbClient.send(new ListTablesCommand({}));
      break;
    } catch (err) {
      await sleep(3000);
    }
  }

  const tableName = getStringFromConfig(Constants.DYNAMODB_CARD_TABLENAME);
  await ddbClient.send(
    new CreateTableCommand({
      TableName: tableName,
      KeySchema: [
        { AttributeName: "spaceID", KeyType: "HASH" },
        { AttributeName: "pathToRoot", KeyType: "RANGE" },
      ],
      AttributeDefinitions: [
        { AttributeName: "spaceID", AttributeType: "S" },
        { AttributeName: "pathToRoot", AttributeType: "S" },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    }),
  );
  return dynamoLocalProcess;
};

describe("Cards repository", () => {
  const repository = new CardsRepository(new ShortUUIDCounter());
  const persistedRepository = new CardsRepositoryDynamo(CardEntity);
  let dynamoLocalProcess: ChildProcess;

  beforeAll(async () => {
    dynamoLocalProcess = await setupDynamoLocal();
  }, 10_000);

  afterAll(async () => {
    await DynamoDbLocal.stopChild(dynamoLocalProcess);
  });

  it("should save new cards on the top level", async () => {
    await persistedRepository.putCard(
      repository.addCard({
        spaceID: "space-1",
        name: "Card 1",
        parentCardPathToRoot: null,
      }),
    );
    await persistedRepository.putCard(
      repository.addCard({
        spaceID: "space-1",
        name: "Card 2",
        parentCardPathToRoot: null,
      }),
    );
    await persistedRepository.putCard(
      repository.addCard({
        spaceID: "space-1",
        name: "Card 3",
        parentCardPathToRoot: null,
      }),
    );

    const allCards = await persistedRepository.listAllInSpace("space-1");
    expect(allCards.length).toBe(3);
    expect(allCards[0].pathToRoot).toMatch(/L_CARD[A-z0-9]{22}$/);
    expect(allCards[1].pathToRoot).toMatch(/L_CARD[A-z0-9]{22}$/);
    expect(allCards[2].pathToRoot).toMatch(/L_CARD[A-z0-9]{22}$/);
  });
  it("should save new cards on the second level and list all children of a card", async () => {
    const allCards = await persistedRepository.listAllInSpace("space-1");
    const parentCard = allCards.find((x) => x.name === "Card 1");
    if (!parentCard) {
      throw Error('Could not find "Card 1"');
    }

    await persistedRepository.putCard(
      repository.addCard({
        spaceID: "space-1",
        name: "Card 1-1",
        parentCardPathToRoot: parentCard.pathToRoot,
      }),
    );

    await persistedRepository.putCard(
      repository.addCard({
        spaceID: "space-1",
        name: "Card 1-2",
        parentCardPathToRoot: parentCard.pathToRoot,
      }),
    );

    await persistedRepository.putCard(
      repository.addCard({
        spaceID: "space-1",
        name: "Card 1-3",
        parentCardPathToRoot: parentCard.pathToRoot,
      }),
    );

    const cardChildren = await persistedRepository.listCardChildren(
      "space-1",
      parentCard.cardID,
    );
    cardChildren.sort((a, b) => a.name.localeCompare(b.name));
    expect(cardChildren.length).toBe(3);
    expect(cardChildren[0].name).toBe("Card 1-1");
    expect(cardChildren[1].name).toBe("Card 1-2");
    expect(cardChildren[2].name).toBe("Card 1-3");
  });
});
