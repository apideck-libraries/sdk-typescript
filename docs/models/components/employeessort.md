# EmployeesSort

## Example Usage

```typescript
import { EmployeesSort } from "apideck/models/components";

let value: EmployeesSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `by`                                                                     | [components.EmployeesSortBy](../../models/components/employeessortby.md) | :heavy_minus_sign:                                                       | The field on which to sort the Employees                                 | created_at                                                               |
| `direction`                                                              | [components.SortDirection](../../models/components/sortdirection.md)     | :heavy_minus_sign:                                                       | The direction in which to sort the results                               |                                                                          |