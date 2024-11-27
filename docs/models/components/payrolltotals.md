# PayrollTotals

The overview of the payroll totals.

## Example Usage

```typescript
import { PayrollTotals } from "@apideck/sdk/models/components";

let value: PayrollTotals = {
  companyDebit: 27992.49,
  taxDebit: 8655.32,
  checkAmount: 27966.23,
  netPay: 19337.17,
  grossPay: 27966.23,
  employerTaxes: 2038.93,
  employeeTaxes: 6616.39,
  employerBenefitContributions: 0,
  employeeBenefitDeductions: 0,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `companyDebit`                                                    | *number*                                                          | :heavy_minus_sign:                                                | The total company debit for the payroll.                          | 27992.49                                                          |
| `taxDebit`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The total tax debit for the payroll.                              | 8655.32                                                           |
| `checkAmount`                                                     | *number*                                                          | :heavy_minus_sign:                                                | The total check amount for the payroll.                           | 27966.23                                                          |
| `netPay`                                                          | *number*                                                          | :heavy_minus_sign:                                                | The net pay amount for the payroll.                               | 19337.17                                                          |
| `grossPay`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The gross pay amount for the payroll.                             | 27966.23                                                          |
| `employerTaxes`                                                   | *number*                                                          | :heavy_minus_sign:                                                | The total amount of employer paid taxes for the payroll.          | 2038.93                                                           |
| `employeeTaxes`                                                   | *number*                                                          | :heavy_minus_sign:                                                | The total amount of employee paid taxes for the payroll.          | 6616.39                                                           |
| `employerBenefitContributions`                                    | *number*                                                          | :heavy_minus_sign:                                                | The total amount of company contributed benefits for the payroll. | 0                                                                 |
| `employeeBenefitDeductions`                                       | *number*                                                          | :heavy_minus_sign:                                                | The total amount of employee deducted benefits for the payroll.   | 0                                                                 |