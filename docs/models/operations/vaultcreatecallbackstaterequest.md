# VaultCreateCallbackStateRequest

## Example Usage

```typescript
import { VaultCreateCallbackStateRequest } from "@apideck/sdk/models/operations";

let value: VaultCreateCallbackStateRequest = {
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
| `serviceId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Service ID of the resource to return                                             | pipedrive                                                                        |
| `unifiedApi`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Unified API                                                                      | crm                                                                              |
| `createCallbackState`                                                            | [components.CreateCallbackState](../../models/components/createcallbackstate.md) | :heavy_check_mark:                                                               | Callback state data                                                              |                                                                                  |