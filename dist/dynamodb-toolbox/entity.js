"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardEntity = void 0;
const dynamodb_toolbox_1 = require("dynamodb-toolbox");
const table_1 = require("./table");
const cardAttributes = {
  spaceID: { partitionKey: true },
  pathToRoot: { sortKey: true },
  cardID: { type: "string" },
  name: { type: "string" },
  content: { type: "string" },
  entityType: { type: "string" },
  createdAt: { type: "string" },
  updatedAt: { type: "string" },
  owner: { type: "string" },
};
exports.CardEntity = new dynamodb_toolbox_1.Entity({
  name: "Card",
  attributes: cardAttributes,
  table: table_1.CardTable,
});
