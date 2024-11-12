# WebhookSupport

How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.

## Example Usage

```typescript
import { WebhookSupport } from "apideck/models/components";

let value: WebhookSupport = {
  mode: "native",
  subscriptionLevel: "integration",
  managedVia: "api",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mode`                                                                       | [components.Mode](../../models/components/mode.md)                           | :heavy_minus_sign:                                                           | Mode of the webhook support.                                                 | native                                                                       |
| `subscriptionLevel`                                                          | [components.SubscriptionLevel](../../models/components/subscriptionlevel.md) | :heavy_minus_sign:                                                           | Received events are scoped to connection or across integration.              | integration                                                                  |
| `managedVia`                                                                 | [components.ManagedVia](../../models/components/managedvia.md)               | :heavy_minus_sign:                                                           | How the subscription is managed in the downstream.                           | api                                                                          |
| `virtualWebhooks`                                                            | [components.VirtualWebhooks](../../models/components/virtualwebhooks.md)     | :heavy_minus_sign:                                                           | Virtual webhook config for the connector.                                    |                                                                              |