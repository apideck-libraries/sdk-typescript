# ExpenseReportsFilter

## Example Usage

```typescript
import { ExpenseReportsFilter } from "@apideck/unify/models/components";

let value: ExpenseReportsFilter = {
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  status: "submitted",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `updatedSince`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2020-09-30T07:43:32.000Z                                                                       |
| `status`                                                                                       | [components.ExpenseReportsFilterStatus](../../models/components/expensereportsfilterstatus.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `employeeId`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | Filter by employee ID                                                                          | 12345                                                                                          |