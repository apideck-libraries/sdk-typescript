# AccountingJournalEntriesBatchAddResponse

## Example Usage

```typescript
import { AccountingJournalEntriesBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalEntriesBatchAddResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `batchJournalEntriesResponse`                                                                    | [components.BatchJournalEntriesResponse](../../models/components/batchjournalentriesresponse.md) | :heavy_minus_sign:                                                                               | Journal Entries batch processed                                                                  |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |