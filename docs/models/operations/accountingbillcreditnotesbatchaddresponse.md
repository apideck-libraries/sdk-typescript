# AccountingBillCreditNotesBatchAddResponse

## Example Usage

```typescript
import { AccountingBillCreditNotesBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingBillCreditNotesBatchAddResponse = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `batchBillCreditNotesResponse`                                                                     | [components.BatchBillCreditNotesResponse](../../models/components/batchbillcreditnotesresponse.md) | :heavy_minus_sign:                                                                                 | Bill Credit Notes batch processed                                                                  |
| `unexpectedErrorResponse`                                                                          | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)           | :heavy_minus_sign:                                                                                 | Unexpected error                                                                                   |