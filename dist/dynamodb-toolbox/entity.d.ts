import { Card } from "cards-model/dist/interfaces/models";
import { Entity } from "dynamodb-toolbox";
import { AttributeDefinition } from "dynamodb-toolbox/dist/cjs/classes/Entity/types";
type CardAttributes = {
  [Property in keyof Card]: AttributeDefinition;
};
export declare const CardEntity: Entity<
  "Card",
  undefined,
  undefined,
  import("dynamodb-toolbox/dist/cjs/classes/Table/Table").default<
    string,
    "spaceID",
    "pathToRoot"
  >,
  true,
  true,
  true,
  "created",
  "modified",
  "entity",
  false,
  CardAttributes,
  {
    spaceID:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    pathToRoot:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    cardID:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    name:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    content:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    entityType:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    createdAt:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    updatedAt:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
    owner:
      | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
      | [string, number]
      | [
          string,
          number,
          import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
        ]
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: true;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          sortKey: true;
          partitionKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey: string;
          sortKey?: false | undefined;
        }
      | {
          type?: "string" | "number" | "bigint" | "binary" | undefined;
          default?: any;
          hidden?: boolean | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
          onUpdate?: boolean | undefined;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: any) => any) | undefined;
          format?: ((value: any, data: any) => any) | undefined;
          coerce?: boolean | undefined;
          save?: undefined;
          required?: undefined;
          alias?: undefined;
          map?: undefined;
          setType?: undefined;
          partitionKey?: false | undefined;
          sortKey: string;
        }
      | {
          partitionKey?: false | undefined;
          sortKey?: false | undefined;
          type?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
            | undefined;
          default?: any;
          dependsOn?: string | string[] | undefined;
          transform?: ((value: any, data: {}) => any) | undefined;
          format?: ((value: any, data: {}) => any) | undefined;
          coerce?: boolean | undefined;
          save?: boolean | undefined;
          onUpdate?: boolean | undefined;
          hidden?: boolean | undefined;
          required?: boolean | "always" | undefined;
          alias?: string | undefined;
          map?: string | undefined;
          setType?:
            | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
            | undefined;
          delimiter?: string | undefined;
          prefix?: string | undefined;
          suffix?: string | undefined;
        }
      | [
          string,
          number,
          {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          },
        ];
  },
  import("dynamodb-toolbox/dist/cjs/classes/Entity/types").ParseAttributes<
    {
      spaceID:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      pathToRoot:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      cardID:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      name:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      content:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      entityType:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      createdAt:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      updatedAt:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
      owner:
        | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
        | [string, number]
        | [
            string,
            number,
            import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes,
          ]
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: true;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            sortKey: true;
            partitionKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey: string;
            sortKey?: false | undefined;
          }
        | {
            type?: "string" | "number" | "bigint" | "binary" | undefined;
            default?: any;
            hidden?: boolean | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
            onUpdate?: boolean | undefined;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: any) => any) | undefined;
            format?: ((value: any, data: any) => any) | undefined;
            coerce?: boolean | undefined;
            save?: undefined;
            required?: undefined;
            alias?: undefined;
            map?: undefined;
            setType?: undefined;
            partitionKey?: false | undefined;
            sortKey: string;
          }
        | {
            partitionKey?: false | undefined;
            sortKey?: false | undefined;
            type?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
              | undefined;
            default?: any;
            dependsOn?: string | string[] | undefined;
            transform?: ((value: any, data: {}) => any) | undefined;
            format?: ((value: any, data: {}) => any) | undefined;
            coerce?: boolean | undefined;
            save?: boolean | undefined;
            onUpdate?: boolean | undefined;
            hidden?: boolean | undefined;
            required?: boolean | "always" | undefined;
            alias?: string | undefined;
            map?: string | undefined;
            setType?:
              | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
              | undefined;
            delimiter?: string | undefined;
            prefix?: string | undefined;
            suffix?: string | undefined;
          }
        | [
            string,
            number,
            {
              partitionKey?: false | undefined;
              sortKey?: false | undefined;
              type?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBTypes
                | undefined;
              default?: any;
              dependsOn?: string | string[] | undefined;
              transform?: ((value: any, data: {}) => any) | undefined;
              format?: ((value: any, data: {}) => any) | undefined;
              coerce?: boolean | undefined;
              save?: boolean | undefined;
              onUpdate?: boolean | undefined;
              hidden?: boolean | undefined;
              required?: boolean | "always" | undefined;
              alias?: string | undefined;
              map?: string | undefined;
              setType?:
                | import("dynamodb-toolbox/dist/cjs/classes/Table/types").DynamoDBKeyTypes
                | undefined;
              delimiter?: string | undefined;
              prefix?: string | undefined;
              suffix?: string | undefined;
            },
          ];
    },
    true,
    "created",
    "modified",
    "entity",
    false
  >,
  {
    entity: string;
    spaceID: any;
    pathToRoot: any;
    cardID: any;
    name: any;
    content: any;
    entityType: any;
    createdAt: any;
    updatedAt: any;
    owner: any;
    created: string;
    modified: string;
  },
  {
    entity: string;
    spaceID: any;
    pathToRoot: any;
    cardID: any;
    name: any;
    content: any;
    entityType: any;
    createdAt: any;
    updatedAt: any;
    owner: any;
    created: string;
    modified: string;
  },
  {
    spaceID: any;
    pathToRoot: any;
    cardID: any;
    name: any;
    content: any;
    entityType: any;
    createdAt: any;
    updatedAt: any;
    owner: any;
  }
>;
export {};
