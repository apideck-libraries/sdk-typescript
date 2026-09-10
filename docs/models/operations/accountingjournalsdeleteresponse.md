# AccountingJournalsDeleteResponse

## Example Usage

```typescript
import { AccountingJournalsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalsDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteJournalResponse`                                                                  | [components.DeleteJournalResponse](../../models/components/deletejournalresponse.md)     | :heavy_minus_sign:                                                                       | Journals                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |