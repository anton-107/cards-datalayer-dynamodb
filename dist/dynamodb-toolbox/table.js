"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTable = exports.DocumentClient = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dynamodb_toolbox_1 = require("dynamodb-toolbox");
const config_1 = require("../config/config");
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
const dynamoDBClientConfig = {};
const endpointOverride = (0, config_1.getStringFromConfig)(
  config_1.Constants.DYNAMOCLIENT_ENDPOINT_OVERRIDE,
);
if (endpointOverride) {
  dynamoDBClientConfig["endpoint"] = endpointOverride;
}
// Instantiate a DocumentClient
exports.DocumentClient = lib_dynamodb_1.DynamoDBDocumentClient.from(
  new client_dynamodb_1.DynamoDBClient(dynamoDBClientConfig),
  translateConfig,
);
// Instantiate a table
exports.CardTable = new dynamodb_toolbox_1.Table({
  // Specify table name (used by DynamoDB)
  name: (0, config_1.getStringFromConfig)(
    config_1.Constants.DYNAMODB_CARD_TABLENAME,
  ),
  // Define partition and sort keys
  partitionKey: "spaceID",
  sortKey: "pathToRoot",
  // Add the DocumentClient
  DocumentClient: exports.DocumentClient,
});
