# AccountingExpensesUpdateResponse

## Example Usage

```typescript
import { AccountingExpensesUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingExpensesUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateExpenseResponse`                                                                  | [components.UpdateExpenseResponse](../../models/components/updateexpenseresponse.md)     | :heavy_minus_sign:                                                                       | Expenses                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |