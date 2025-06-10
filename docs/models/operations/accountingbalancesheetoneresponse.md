# AccountingBalanceSheetOneResponse

## Example Usage

```typescript
import { AccountingBalanceSheetOneResponse } from "@apideck/unify/models/operations";

let value: AccountingBalanceSheetOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getBalanceSheetResponse`                                                                | [components.GetBalanceSheetResponse](../../models/components/getbalancesheetresponse.md) | :heavy_minus_sign:                                                                       | BalanceSheet                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |