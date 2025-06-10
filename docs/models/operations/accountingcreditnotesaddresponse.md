# AccountingCreditNotesAddResponse

## Example Usage

```typescript
import { AccountingCreditNotesAddResponse } from "@apideck/unify/models/operations";

let value: AccountingCreditNotesAddResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createCreditNoteResponse`                                                                 | [components.CreateCreditNoteResponse](../../models/components/createcreditnoteresponse.md) | :heavy_minus_sign:                                                                         | Credit Note created                                                                        |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |