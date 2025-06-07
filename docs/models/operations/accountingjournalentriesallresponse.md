# AccountingJournalEntriesAllResponse

## Example Usage

```typescript
import { AccountingJournalEntriesAllResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalEntriesAllResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getJournalEntriesResponse`                                                                  | [components.GetJournalEntriesResponse](../../models/components/getjournalentriesresponse.md) | :heavy_minus_sign:                                                                           | JournalEntry                                                                                 |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |