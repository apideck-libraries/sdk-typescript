# AccountingCreditNotesBatchAddResponse

## Example Usage

```typescript
import { AccountingCreditNotesBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingCreditNotesBatchAddResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `batchCreditNotesResponse`                                                                 | [components.BatchCreditNotesResponse](../../models/components/batchcreditnotesresponse.md) | :heavy_minus_sign:                                                                         | Credit Notes batch processed                                                               |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |