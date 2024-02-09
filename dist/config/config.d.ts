import "dotenv/config";
export declare enum Constants {
  DYNAMOCLIENT_ENDPOINT_OVERRIDE = "DYNAMOCLIENT_ENDPOINT_OVERRIDE",
  DYNAMODB_CARD_TABLENAME = "DYNAMODB_CARD_TABLENAME",
}
export declare function getStringFromConfig(variableName: Constants): string;
