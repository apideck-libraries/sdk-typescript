# VaultConnectionsTokenRequest

## Example Usage

```typescript
import { VaultConnectionsTokenRequest } from "@apideck/sdk/models/operations";

let value: VaultConnectionsTokenRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Service ID of the resource to return                                                                       | pipedrive                                                                                                  |
| `unifiedApi`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unified API                                                                                                | crm                                                                                                        |
| `requestBody`                                                                                              | [operations.VaultConnectionsTokenRequestBody](../../models/operations/vaultconnectionstokenrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |