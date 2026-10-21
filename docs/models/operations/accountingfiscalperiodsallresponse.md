# AccountingFiscalPeriodsAllResponse

## Example Usage

```typescript
import { AccountingFiscalPeriodsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingFiscalPeriodsAllResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getFiscalPeriodsResponse`                                                                 | [components.GetFiscalPeriodsResponse](../../models/components/getfiscalperiodsresponse.md) | :heavy_minus_sign:                                                                         | Fiscal Periods                                                                             |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |