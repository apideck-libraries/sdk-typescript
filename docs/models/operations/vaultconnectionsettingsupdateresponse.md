# VaultConnectionSettingsUpdateResponse

## Example Usage

```typescript
import { VaultConnectionSettingsUpdateResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionSettingsUpdateResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updateConnectionResponse`                                                                 | [components.UpdateConnectionResponse](../../models/components/updateconnectionresponse.md) | :heavy_minus_sign:                                                                         | Connection updated                                                                         |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |