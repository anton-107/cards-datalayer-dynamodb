import 'dotenv/config';

export enum Constants {
  DYNAMOCLIENT_ENDPOINT_OVERRIDE = "DYNAMOCLIENT_ENDPOINT_OVERRIDE", 
  DYNAMODB_CARD_TABLENAME = "DYNAMODB_CARD_TABLENAME"
};

export function getStringFromConfig(variableName: Constants): string {
  if (!process.env[variableName]) {
    throw new Error(`Variable ${variableName} is not specified in your environment`)
  }
  return String(process.env[variableName]);
}