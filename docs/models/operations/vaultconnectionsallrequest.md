# VaultConnectionsAllRequest

## Example Usage

```typescript
import { VaultConnectionsAllRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionsAllRequest = {
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  api: "crm",
  configured: true,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `consumerId`                                                   | *string*                                                       | :heavy_minus_sign:                                             | ID of the consumer which you want to get or push data from     | test-consumer                                                  |
| `appId`                                                        | *string*                                                       | :heavy_minus_sign:                                             | The ID of your Unify application                               | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                        |
| `api`                                                          | *string*                                                       | :heavy_minus_sign:                                             | Scope results to Unified API                                   | crm                                                            |
| `configured`                                                   | *boolean*                                                      | :heavy_minus_sign:                                             | Scopes results to connections that have been configured or not | true                                                           |