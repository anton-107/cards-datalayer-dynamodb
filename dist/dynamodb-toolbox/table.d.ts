import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { Table } from "dynamodb-toolbox";
export declare const DocumentClient: DynamoDBDocumentClient;
export declare const CardTable: Table<string, "spaceID", "pathToRoot">;
