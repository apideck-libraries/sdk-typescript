# AccountingJournalsAddResponse

## Example Usage

```typescript
import { AccountingJournalsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalsAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createJournalResponse`                                                                  | [components.CreateJournalResponse](../../models/components/createjournalresponse.md)     | :heavy_minus_sign:                                                                       | Journals                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |