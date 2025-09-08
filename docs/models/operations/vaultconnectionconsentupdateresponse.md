# VaultConnectionConsentUpdateResponse

## Example Usage

```typescript
import { VaultConnectionConsentUpdateResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionConsentUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateConsentResponse`                                                                  | [components.UpdateConsentResponse](../../models/components/updateconsentresponse.md)     | :heavy_minus_sign:                                                                       | Consent updated                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |