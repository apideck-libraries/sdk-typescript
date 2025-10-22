# ExpensesFilter

## Example Usage

```typescript
import { ExpensesFilter } from "@apideck/unify/models/components";

let value: ExpensesFilter = {
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  status: "draft",
  type: "expense",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `status`                                                                                      | [components.ExpensesFilterStatus](../../models/components/expensesfilterstatus.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | [components.ExpensesFilterType](../../models/components/expensesfiltertype.md)                | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |