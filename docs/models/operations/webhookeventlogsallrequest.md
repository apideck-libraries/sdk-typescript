# WebhookEventLogsAllRequest

## Example Usage

```typescript
import { WebhookEventLogsAllRequest } from "@apideck/sdk/models/operations";

let value: WebhookEventLogsAllRequest = {
  filter: {
    excludeApis: "vault,proxy",
    consumerId: "test_user_id",
    entityType: "Connection",
    eventType: "vault.connection.callable",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of results to return. Minimum 1, Maximum 200, Default 20                                                  |
| `filter`                                                                                                         | [components.WebhookEventLogsFilter](../../models/components/webhookeventlogsfilter.md)                           | :heavy_minus_sign:                                                                                               | Filter results                                                                                                   |