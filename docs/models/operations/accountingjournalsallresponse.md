# AccountingJournalsAllResponse

## Example Usage

```typescript
import { AccountingJournalsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingJournalsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getJournalsResponse`                                                                    | [components.GetJournalsResponse](../../models/components/getjournalsresponse.md)         | :heavy_minus_sign:                                                                       | Journals                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |