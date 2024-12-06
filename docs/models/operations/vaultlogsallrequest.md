# VaultLogsAllRequest

## Example Usage

```typescript
import { VaultLogsAllRequest } from "@apideck/unify/models/operations";

let value: VaultLogsAllRequest = {
  filter: {
    connectorId: "crm+salesforce",
    statusCode: 201,
    excludeUnifiedApis: "vault,proxy",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                         | [components.LogsFilter](../../models/components/logsfilter.md)                                                   | :heavy_minus_sign:                                                                                               | Filter results                                                                                                   |
| `cursor`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of results to return. Minimum 1, Maximum 200, Default 20                                                  |