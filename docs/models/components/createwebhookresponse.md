# CreateWebhookResponse

Webhooks

## Example Usage

```typescript
import { CreateWebhookResponse } from "apideck/models/components";

let value: CreateWebhookResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "1234",
    description: "A description",
    unifiedApi: "crm",
    status: "enabled",
    disabledReason: "retry_limit",
    deliveryUrl: "https://example.com/my/webhook/endpoint",
    executeBaseUrl: "https://unify.apideck.com/webhook/webhooks/1234/execute",
    events: [
      "vault.connection.created",
      "vault.connection.updated",
    ],
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | HTTP Response Status Code                                | 200                                                      |
| `status`                                                 | *string*                                                 | :heavy_check_mark:                                       | HTTP Response Status                                     | OK                                                       |
| `data`                                                   | [components.Webhook](../../models/components/webhook.md) | :heavy_check_mark:                                       | N/A                                                      |                                                          |