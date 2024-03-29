import { Card } from "cards-model/dist/interfaces/models";
import { Entity } from "dynamodb-toolbox";
import { AttributeDefinition } from "dynamodb-toolbox/dist/cjs/classes/Entity/types";

import { CardTable } from "./table";

type CardAttributes = { [Property in keyof Card]: AttributeDefinition };

const cardAttributes: CardAttributes = {
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

export const CardEntity = new Entity({
  name: "Card",
  attributes: cardAttributes,
  table: CardTable,
} as const);
