# WebhookWebhooksAddRequest

## Example Usage

```typescript
import { WebhookWebhooksAddRequest } from "@apideck/unify/models/operations";

let value: WebhookWebhooksAddRequest = {
  createWebhookRequest: {
    description: "A description",
    unifiedApi: "crm",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `appId`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of your Unify application                                                   | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                            |
| `createWebhookRequest`                                                             | [components.CreateWebhookRequest](../../models/components/createwebhookrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |