# AccountingQuotesOneResponse

## Example Usage

```typescript
import { AccountingQuotesOneResponse } from "@apideck/unify/models/operations";

let value: AccountingQuotesOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getQuoteResponse`                                                                       | [components.GetQuoteResponse](../../models/components/getquoteresponse.md)               | :heavy_minus_sign:                                                                       | Quotes                                                                                   |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |