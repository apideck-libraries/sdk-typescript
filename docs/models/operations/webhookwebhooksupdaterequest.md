# WebhookWebhooksUpdateRequest

## Example Usage

```typescript
import { WebhookWebhooksUpdateRequest } from "apideck/models/operations";

let value: WebhookWebhooksUpdateRequest = {
  id: "<id>",
  updateWebhookRequest: {
    description: "A description",
    status: "enabled",
    deliveryUrl: "https://example.com/my/webhook/endpoint",
    events: [
      "vault.connection.created",
      "vault.connection.updated",
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. |
| `updateWebhookRequest`                                                                             | [components.UpdateWebhookRequest](../../models/components/updatewebhookrequest.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |