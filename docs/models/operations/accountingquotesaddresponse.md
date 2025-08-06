# AccountingQuotesAddResponse

## Example Usage

```typescript
import { AccountingQuotesAddResponse } from "@apideck/unify/models/operations";

let value: AccountingQuotesAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createQuoteResponse`                                                                    | [components.CreateQuoteResponse](../../models/components/createquoteresponse.md)         | :heavy_minus_sign:                                                                       | Quotes                                                                                   |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |