# AccountingTaxRatesUpdateResponse

## Example Usage

```typescript
import { AccountingTaxRatesUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingTaxRatesUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateTaxRateResponse`                                                                  | [components.UpdateTaxRateResponse](../../models/components/updatetaxrateresponse.md)     | :heavy_minus_sign:                                                                       | TaxRate updated                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |