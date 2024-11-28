# ConnectorEvent

Unify event that is supported on the connector. Events are delivered via Webhooks.

## Example Usage

```typescript
import { ConnectorEvent } from "@apideck/unify/models/components";

let value: ConnectorEvent = {
  eventType: "employee.created",
  eventSource: "native",
  downstreamEventType: "person_created",
  resources: [
    "companies",
  ],
  entityType: "employee",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `eventType`                                                      | *string*                                                         | :heavy_minus_sign:                                               | Unify event type                                                 | employee.created                                                 |
| `eventSource`                                                    | [components.EventSource](../../models/components/eventsource.md) | :heavy_minus_sign:                                               | Unify event source                                               | native                                                           |
| `downstreamEventType`                                            | *string*                                                         | :heavy_minus_sign:                                               | Downstream event type                                            | person_created                                                   |
| `resources`                                                      | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `entityType`                                                     | *string*                                                         | :heavy_minus_sign:                                               | Unify entity type                                                | employee                                                         |