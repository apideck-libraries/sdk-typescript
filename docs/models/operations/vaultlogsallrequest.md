# VaultLogsAllRequest

## Example Usage

```typescript
import { VaultLogsAllRequest } from "@apideck/unify/models/operations";

let value: VaultLogsAllRequest = {
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  consumerId: "test-consumer",
  filter: {
    connectorId: "crm+salesforce",
    statusCode: 201,
    excludeUnifiedApis: "vault,proxy",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The ID of your Unify application                                                                                 | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                          |
| `consumerId`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | ID of the consumer which you want to get or push data from                                                       | test-consumer                                                                                                    |
| `filter`                                                                                                         | [components.LogsFilter](../../models/components/logsfilter.md)                                                   | :heavy_minus_sign:                                                                                               | Filter results                                                                                                   |                                                                                                                  |
| `cursor`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. |                                                                                                                  |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of results to return. Minimum 1, Maximum 200, Default 20                                                  |                                                                                                                  |