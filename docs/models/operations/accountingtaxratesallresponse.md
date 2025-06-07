# AccountingTaxRatesAllResponse

## Example Usage

```typescript
import { AccountingTaxRatesAllResponse } from "@apideck/unify/models/operations";

let value: AccountingTaxRatesAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getTaxRatesResponse`                                                                    | [components.GetTaxRatesResponse](../../models/components/gettaxratesresponse.md)         | :heavy_minus_sign:                                                                       | TaxRates                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |