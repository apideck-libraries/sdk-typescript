# WebhookSubscription

## Example Usage

```typescript
import { WebhookSubscription } from "apideck/models/components";

let value: WebhookSubscription = {
  downstreamId: "5f5f5f5f5f5f5f5f5f5f5f5f",
  unifyEventTypes: [
    "crm.contact.created",
  ],
  downstreamEventTypes: [
    "contacts.CREATED",
  ],
  executeUrl:
    "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
  createdAt: "2020-10-01T12:00:00.000Z",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `downstreamId`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | The ID of the downstream service                                                        | 5f5f5f5f5f5f5f5f5f5f5f5f                                                                |
| `unifyEventTypes`                                                                       | *string*[]                                                                              | :heavy_minus_sign:                                                                      | The list of Unify Events this connection is subscribed to                               |                                                                                         |
| `downstreamEventTypes`                                                                  | *string*[]                                                                              | :heavy_minus_sign:                                                                      | The list of downstream Events this connection is subscribed to                          |                                                                                         |
| `executeUrl`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | The URL the downstream is sending to when the event is triggered                        | https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType} |
| `createdAt`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | The date and time the webhook subscription was created downstream                       | 2020-10-01T12:00:00.000Z                                                                |