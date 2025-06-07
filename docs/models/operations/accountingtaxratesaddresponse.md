# AccountingTaxRatesAddResponse

## Example Usage

```typescript
import { AccountingTaxRatesAddResponse } from "@apideck/unify/models/operations";

let value: AccountingTaxRatesAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createTaxRateResponse`                                                                  | [components.CreateTaxRateResponse](../../models/components/createtaxrateresponse.md)     | :heavy_minus_sign:                                                                       | TaxRate created                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |