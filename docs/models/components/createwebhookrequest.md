# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@apideck/sdk/models/components";

let value: CreateWebhookRequest = {
  description: "A description",
  unifiedApi: "crm",
  status: "enabled",
  deliveryUrl: "https://example.com/my/webhook/endpoint",
  events: [
    "vault.connection.created",
    "vault.connection.updated",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | A description of the object.                                                                 | A description                                                                                |
| `unifiedApi`                                                                                 | [components.UnifiedApiId](../../models/components/unifiedapiid.md)                           | :heavy_check_mark:                                                                           | Name of Apideck Unified API                                                                  | crm                                                                                          |
| `status`                                                                                     | [components.Status](../../models/components/status.md)                                       | :heavy_check_mark:                                                                           | The status of the webhook.                                                                   | enabled                                                                                      |
| `deliveryUrl`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | The delivery url of the webhook endpoint.                                                    | https://example.com/my/webhook/endpoint                                                      |
| `events`                                                                                     | [components.WebhookEventType](../../models/components/webhookeventtype.md)[]                 | :heavy_check_mark:                                                                           | The list of subscribed events for this webhook. [`*`] indicates that all events are enabled. | [<br/>"vault.connection.created",<br/>"vault.connection.updated"<br/>]                       |