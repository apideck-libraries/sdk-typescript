# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@apideck/sdk/models/components";

let value: UpdateWebhookRequest = {
  description: "A description",
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
| `status`                                                                                     | [components.Status](../../models/components/status.md)                                       | :heavy_minus_sign:                                                                           | The status of the webhook.                                                                   | enabled                                                                                      |
| `deliveryUrl`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The delivery url of the webhook endpoint.                                                    | https://example.com/my/webhook/endpoint                                                      |
| `events`                                                                                     | [components.WebhookEventType](../../models/components/webhookeventtype.md)[]                 | :heavy_minus_sign:                                                                           | The list of subscribed events for this webhook. [`*`] indicates that all events are enabled. | [<br/>"vault.connection.created",<br/>"vault.connection.updated"<br/>]                       |