# WebhookEventLogsFilter

## Example Usage

```typescript
import { WebhookEventLogsFilter } from "@apideck/unify/models/components";

let value: WebhookEventLogsFilter = {
  excludeApis: "vault,proxy",
  consumerId: "test_user_id",
  entityType: "Connection",
  eventType: "vault.connection.callable",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `excludeApis`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | vault,proxy                                                                                          |
| `service`                                                                                            | [components.WebhookEventLogsFilterService](../../models/components/webhookeventlogsfilterservice.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `consumerId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | test_user_id                                                                                         |
| `entityType`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | Connection                                                                                           |
| `eventType`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | vault.connection.callable                                                                            |