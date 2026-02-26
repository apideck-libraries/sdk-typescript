# AccountingExpenseReportsAllResponse

## Example Usage

```typescript
import { AccountingExpenseReportsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingExpenseReportsAllResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getExpenseReportsResponse`                                                                  | [components.GetExpenseReportsResponse](../../models/components/getexpensereportsresponse.md) | :heavy_minus_sign:                                                                           | Expense Reports                                                                              |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |