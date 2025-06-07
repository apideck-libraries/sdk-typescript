# AccountingCreditNotesDeleteResponse

## Example Usage

```typescript
import { AccountingCreditNotesDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingCreditNotesDeleteResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deleteCreditNoteResponse`                                                                 | [components.DeleteCreditNoteResponse](../../models/components/deletecreditnoteresponse.md) | :heavy_minus_sign:                                                                         | Credit Note deleted                                                                        |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |