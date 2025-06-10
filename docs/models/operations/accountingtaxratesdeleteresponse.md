# AccountingTaxRatesDeleteResponse

## Example Usage

```typescript
import { AccountingTaxRatesDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingTaxRatesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteTaxRateResponse`                                                                  | [components.DeleteTaxRateResponse](../../models/components/deletetaxrateresponse.md)     | :heavy_minus_sign:                                                                       | TaxRates deleted                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |