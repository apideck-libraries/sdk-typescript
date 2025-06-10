# AccountingJournalEntriesDeleteResponse

## Example Usage

```typescript
import { AccountingJournalEntriesDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalEntriesDeleteResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deleteJournalEntryResponse`                                                                   | [components.DeleteJournalEntryResponse](../../models/components/deletejournalentryresponse.md) | :heavy_minus_sign:                                                                             | JournalEntries                                                                                 |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |