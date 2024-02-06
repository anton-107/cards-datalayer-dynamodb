import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { Table } from "dynamodb-toolbox";

import { Constants, getStringFromConfig } from "../config/config";

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // if not false explicitly, we set it to true.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  // NOTE: this is required to be true in order to use the bigint data type.
  wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

const dynamoDBClientConfig: Record<string, string> = {};
const endpointOverride = getStringFromConfig(
  Constants.DYNAMOCLIENT_ENDPOINT_OVERRIDE,
);

if (endpointOverride) {
  dynamoDBClientConfig["endpoint"] = endpointOverride;
}

// Instantiate a DocumentClient
export const DocumentClient = DynamoDBDocumentClient.from(
  new DynamoDBClient(dynamoDBClientConfig),
  translateConfig,
);

// Instantiate a table
export const CardTable = new Table({
  // Specify table name (used by DynamoDB)
  name: getStringFromConfig(Constants.DYNAMODB_CARD_TABLENAME),

  // Define partition and sort keys
  partitionKey: "spaceID",
  sortKey: "pathToRoot",

  // Add the DocumentClient
  DocumentClient,
});
