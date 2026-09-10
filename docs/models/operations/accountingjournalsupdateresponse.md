# AccountingJournalsUpdateResponse

## Example Usage

```typescript
import { AccountingJournalsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalsUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateJournalResponse`                                                                  | [components.UpdateJournalResponse](../../models/components/updatejournalresponse.md)     | :heavy_minus_sign:                                                                       | Journals                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |