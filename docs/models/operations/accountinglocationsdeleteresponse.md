# AccountingLocationsDeleteResponse

## Example Usage

```typescript
import { AccountingLocationsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingLocationsDeleteResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deleteAccountingLocationResponse`                                                                         | [components.DeleteAccountingLocationResponse](../../models/components/deleteaccountinglocationresponse.md) | :heavy_minus_sign:                                                                                         | Location deleted                                                                                           |
| `unexpectedErrorResponse`                                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                   | :heavy_minus_sign:                                                                                         | Unexpected error                                                                                           |