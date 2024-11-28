# BalanceSheetFilter

## Example Usage

```typescript
import { BalanceSheetFilter } from "@apideck/unify/models/components";

let value: BalanceSheetFilter = {
  startDate: "2021-01-01",
  endDate: "2021-12-31",
  periodCount: 3,
  periodType: "month",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `startDate`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | The start date of the period to include in the resource.             | 2021-01-01                                                           |
| `endDate`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | The end date of the period to include in the resource.               | 2021-12-31                                                           |
| `periodCount`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | The number of periods to include in the resource.                    | 3                                                                    |
| `periodType`                                                         | [components.PeriodType](../../models/components/periodtype.md)       | :heavy_minus_sign:                                                   | The type of period to include in the resource: month, quarter, year. | month                                                                |