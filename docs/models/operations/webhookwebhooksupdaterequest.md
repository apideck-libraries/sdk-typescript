# WebhookWebhooksUpdateRequest

## Example Usage

```typescript
import { WebhookWebhooksUpdateRequest } from "@apideck/unify/models/operations";

let value: WebhookWebhooksUpdateRequest = {
  id: "f75bbb62-0732-4d4e-aba4-941d5736bb64",
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. | f75bbb62-0732-4d4e-aba4-941d5736bb64                                                               |
| `appId`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The ID of your Unify application                                                                   | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                            |
| `updateWebhookRequest`                                                                             | [components.UpdateWebhookRequest](../../models/components/updatewebhookrequest.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |