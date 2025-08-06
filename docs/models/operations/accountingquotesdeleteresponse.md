# AccountingQuotesDeleteResponse

## Example Usage

```typescript
import { AccountingQuotesDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingQuotesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteQuoteResponse`                                                                    | [components.DeleteQuoteResponse](../../models/components/deletequoteresponse.md)         | :heavy_minus_sign:                                                                       | Quotes                                                                                   |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |