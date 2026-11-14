# VaultConnectionsConfirmRequest

## Example Usage

```typescript
import { VaultConnectionsConfirmRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionsConfirmRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
  confirmConnection: {
    confirmToken: "550e8400-e29b-41d4-a716-446655440000",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `consumerId`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | ID of the consumer which you want to get or push data from                   | test-consumer                                                                |
| `appId`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of your Unify application                                             | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                      |
| `serviceId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Service ID of the resource to return                                         | pipedrive                                                                    |
| `unifiedApi`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | Unified API                                                                  | crm                                                                          |
| `confirmConnection`                                                          | [components.ConfirmConnection](../../models/components/confirmconnection.md) | :heavy_check_mark:                                                           | Confirm connection request data                                              |                                                                              |