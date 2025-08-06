# AccountingQuotesUpdateResponse

## Example Usage

```typescript
import { AccountingQuotesUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingQuotesUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateQuoteResponse`                                                                    | [components.UpdateQuoteResponse](../../models/components/updatequoteresponse.md)         | :heavy_minus_sign:                                                                       | Quotes                                                                                   |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |