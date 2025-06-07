# AccountingJournalEntriesAddResponse

## Example Usage

```typescript
import { AccountingJournalEntriesAddResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalEntriesAddResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createJournalEntryResponse`                                                                   | [components.CreateJournalEntryResponse](../../models/components/createjournalentryresponse.md) | :heavy_minus_sign:                                                                             | JournalEntries                                                                                 |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |