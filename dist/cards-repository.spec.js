"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const repository_1 = require("cards-model/dist/repository");
const dynamodb_local_1 = __importDefault(require("dynamodb-local"));
const cards_repository_1 = require("./cards-repository");
const config_1 = require("./config/config");
const entity_1 = require("./dynamodb-toolbox/entity");
const short_uuid_counter_1 = require("./short-uuid-counter");
const sleep = (sleepMs) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, sleepMs));
  });
const setupDynamoLocal = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const dynamoLocalPort = 8000;
    const ddbClient = new client_dynamodb_1.DynamoDBClient({
      endpoint: `http://127.0.0.1:${dynamoLocalPort}`,
    });
    const dynamoLocalProcess = yield dynamodb_local_1.default.launch(
      dynamoLocalPort,
      null,
      [],
      false,
      true,
    );
    // wait for local dynamo to initialize:
    for (let retries = 0; retries <= 5; retries += 1) {
      try {
        yield ddbClient.send(new client_dynamodb_1.ListTablesCommand({}));
        break;
      } catch (err) {
        yield sleep(3000);
      }
    }
    const tableName = (0, config_1.getStringFromConfig)(
      config_1.Constants.DYNAMODB_CARD_TABLENAME,
    );
    yield ddbClient.send(
      new client_dynamodb_1.CreateTableCommand({
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
  });
describe("Cards repository", () => {
  const repository = new repository_1.CardsRepository(
    new short_uuid_counter_1.ShortUUIDCounter(),
  );
  const persistedRepository = new cards_repository_1.CardsRepositoryDynamo(
    entity_1.CardEntity,
  );
  let dynamoLocalProcess;
  beforeAll(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        dynamoLocalProcess = yield setupDynamoLocal();
      }),
    10000,
  );
  afterAll(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield dynamodb_local_1.default.stopChild(dynamoLocalProcess);
    }),
  );
  it("should save new cards on the top level", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield persistedRepository.putCard(
        repository.addCard({
          spaceID: "space-1",
          name: "Card 1",
          parentCardPathToRoot: null,
        }),
      );
      yield persistedRepository.putCard(
        repository.addCard({
          spaceID: "space-1",
          name: "Card 2",
          parentCardPathToRoot: null,
        }),
      );
      yield persistedRepository.putCard(
        repository.addCard({
          spaceID: "space-1",
          name: "Card 3",
          parentCardPathToRoot: null,
        }),
      );
      const allCards = yield persistedRepository.listAllInSpace("space-1");
      expect(allCards.length).toBe(3);
      expect(allCards[0].pathToRoot).toMatch(/L_CARD[A-z0-9]{22}$/);
      expect(allCards[1].pathToRoot).toMatch(/L_CARD[A-z0-9]{22}$/);
      expect(allCards[2].pathToRoot).toMatch(/L_CARD[A-z0-9]{22}$/);
    }));
  it("should save new cards on the second level and list all children of a card", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const allCards = yield persistedRepository.listAllInSpace("space-1");
      const parentCard = allCards.find((x) => x.name === "Card 1");
      if (!parentCard) {
        throw Error('Could not find "Card 1"');
      }
      yield persistedRepository.putCard(
        repository.addCard({
          spaceID: "space-1",
          name: "Card 1-1",
          parentCardPathToRoot: parentCard.pathToRoot,
        }),
      );
      yield persistedRepository.putCard(
        repository.addCard({
          spaceID: "space-1",
          name: "Card 1-2",
          parentCardPathToRoot: parentCard.pathToRoot,
        }),
      );
      yield persistedRepository.putCard(
        repository.addCard({
          spaceID: "space-1",
          name: "Card 1-3",
          parentCardPathToRoot: parentCard.pathToRoot,
        }),
      );
      const cardChildren = yield persistedRepository.listCardChildren(
        "space-1",
        parentCard.cardID,
      );
      cardChildren.sort((a, b) => a.name.localeCompare(b.name));
      expect(cardChildren.length).toBe(3);
      expect(cardChildren[0].name).toBe("Card 1-1");
      expect(cardChildren[1].name).toBe("Card 1-2");
      expect(cardChildren[2].name).toBe("Card 1-3");
    }));
});
