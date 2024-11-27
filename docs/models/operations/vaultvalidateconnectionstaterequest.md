# VaultValidateConnectionStateRequest

## Example Usage

```typescript
import { VaultValidateConnectionStateRequest } from "@apideck/sdk/models/operations";

let value: VaultValidateConnectionStateRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `serviceId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Service ID of the resource to return                                                                                     | pipedrive                                                                                                                |
| `unifiedApi`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unified API                                                                                                              | crm                                                                                                                      |
| `requestBody`                                                                                                            | [operations.VaultValidateConnectionStateRequestBody](../../models/operations/vaultvalidateconnectionstaterequestbody.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |