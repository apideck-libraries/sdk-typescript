# AccountingExpensesDeleteResponse

## Example Usage

```typescript
import { AccountingExpensesDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingExpensesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteExpenseResponse`                                                                  | [components.DeleteExpenseResponse](../../models/components/deleteexpenseresponse.md)     | :heavy_minus_sign:                                                                       | Expenses                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |