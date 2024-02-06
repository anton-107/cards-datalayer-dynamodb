import {
  CreateTableCommand,
  DynamoDBClient,
  ListTablesCommand,
} from "@aws-sdk/client-dynamodb";
import { CardsRepository } from "cards-model/dist/queries";
import { ChildProcess } from "child_process";
import DynamoDbLocal from "dynamodb-local";

import { CardsRepositoryDynamo } from "./cards-repository";
import { Constants, getStringFromConfig } from "./config/config";
import { CardEntity } from "./dynamodb-toolbox/entity";

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
  let dynamoLocalProcess: ChildProcess;

  beforeAll(async () => {
    dynamoLocalProcess = await setupDynamoLocal();
  }, 10_000);

  afterAll(async () => {
    await DynamoDbLocal.stopChild(dynamoLocalProcess);
  });

  it("should save a new card on the top level", async () => {
    const repository = new CardsRepository();
    const persistedRepository = new CardsRepositoryDynamo(CardEntity);
    await persistedRepository.putCard(
      repository.addCard({
        spaceID: "space-1",
        name: "Card 1",
        parentCardPathToRoot: null,
      }),
    );

    const allCards = await persistedRepository.listAllInSpace("space-1");
    expect(allCards.length).toBe(1);
    expect(allCards[0].pathToRoot).toBe("L_CARD1");
  });
});
