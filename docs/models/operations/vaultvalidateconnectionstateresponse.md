# VaultValidateConnectionStateResponse

## Example Usage

```typescript
import { VaultValidateConnectionStateResponse } from "@apideck/unify/models/operations";

let value: VaultValidateConnectionStateResponse = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `validateConnectionStateResponse`                                                                        | [components.ValidateConnectionStateResponse](../../models/components/validateconnectionstateresponse.md) | :heavy_minus_sign:                                                                                       | Connection access token refreshed                                                                        |
| `unexpectedErrorResponse`                                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                 | :heavy_minus_sign:                                                                                       | Unexpected error                                                                                         |