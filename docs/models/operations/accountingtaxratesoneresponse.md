# AccountingTaxRatesOneResponse

## Example Usage

```typescript
import { AccountingTaxRatesOneResponse } from "@apideck/unify/models/operations";

let value: AccountingTaxRatesOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getTaxRateResponse`                                                                     | [components.GetTaxRateResponse](../../models/components/gettaxrateresponse.md)           | :heavy_minus_sign:                                                                       | TaxRate                                                                                  |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |