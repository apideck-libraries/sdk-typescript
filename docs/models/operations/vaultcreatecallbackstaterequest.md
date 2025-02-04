# VaultCreateCallbackStateRequest

## Example Usage

```typescript
import { VaultCreateCallbackStateRequest } from "@apideck/unify/models/operations";

let value: VaultCreateCallbackStateRequest = {
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  serviceId: "pipedrive",
  unifiedApi: "crm",
  createCallbackState: {
    redirectUri: "https://example.com/callback",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `consumerId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | ID of the consumer which you want to get or push data from                       | test-consumer                                                                    |
| `appId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of your Unify application                                                 | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                          |
| `serviceId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Service ID of the resource to return                                             | pipedrive                                                                        |
| `unifiedApi`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Unified API                                                                      | crm                                                                              |
| `createCallbackState`                                                            | [components.CreateCallbackState](../../models/components/createcallbackstate.md) | :heavy_check_mark:                                                               | Callback state data                                                              |                                                                                  |