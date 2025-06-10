# AccountingCreditNotesUpdateResponse

## Example Usage

```typescript
import { AccountingCreditNotesUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingCreditNotesUpdateResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updateCreditNoteResponse`                                                                 | [components.UpdateCreditNoteResponse](../../models/components/updatecreditnoteresponse.md) | :heavy_minus_sign:                                                                         | Credit Note updated                                                                        |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |