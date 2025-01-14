# VirtualWebhooks

Virtual webhook config for the connector.

## Example Usage

```typescript
import { VirtualWebhooks } from "@apideck/unify/models/components";

let value: VirtualWebhooks = {
  requestRate: {
    rate: 699575,
    size: 967966,
    unit: "day",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `requestRate`                                                                                            | [components.RequestRate](../../models/components/requestrate.md)                                         | :heavy_check_mark:                                                                                       | The rate at which requests for resources will be made to downstream.                                     |
| `resources`                                                                                              | Record<string, [components.WebhookSupportResources](../../models/components/webhooksupportresources.md)> | :heavy_minus_sign:                                                                                       | The resources that will be requested from downstream.                                                    |