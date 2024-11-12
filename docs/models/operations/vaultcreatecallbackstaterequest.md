# VaultCreateCallbackStateRequest

## Example Usage

```typescript
import { VaultCreateCallbackStateRequest } from "apideck/models/operations";

let value: VaultCreateCallbackStateRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
  createCallbackStateData: {
    redirectUri: "https://example.com/callback",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `serviceId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Service ID of the resource to return                                                     | pipedrive                                                                                |
| `unifiedApi`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | Unified API                                                                              | crm                                                                                      |
| `createCallbackStateData`                                                                | [components.CreateCallbackStateData](../../models/components/createcallbackstatedata.md) | :heavy_check_mark:                                                                       | Callback state data                                                                      |                                                                                          |