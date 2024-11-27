# Payroll

## Example Usage

```typescript
import { Payroll } from "@apideck/sdk/models/components";

let value: Payroll = {
  id: "12345",
  companyId: "23456",
  processed: false,
  processedDate: "2022-04-08",
  checkDate: "2022-04-08",
  startDate: "2022-04-08",
  endDate: "2022-04-21",
  totals: {
    companyDebit: 27992.49,
    taxDebit: 8655.32,
    checkAmount: 27966.23,
    netPay: 19337.17,
    grossPay: 27966.23,
    employerTaxes: 2038.93,
    employeeTaxes: 6616.39,
    employerBenefitContributions: 0,
    employeeBenefitDeductions: 0,
  },
  compensations: [
    {
      employeeId: "12345",
      netPay: 2199.93,
      grossPay: 3000,
      taxes: [
        {
          name: "CA State Income Tax",
          employer: false,
          amount: 1.97,
        },
      ],
      deductions: [
        {
          name: "Company Car",
          amount: 10.97,
        },
      ],
      benefits: [
        {
          name: "Health Insurance",
          employeeDeduction: 142.94,
          employerContribution: 141.14,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A unique identifier for an object.                                                                          | 12345                                                                                                       |
| `companyId`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The unique identifier of the company.                                                                       | 23456                                                                                                       |
| `processed`                                                                                                 | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. | false                                                                                                       |
| `processedDate`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The date the payroll was processed.                                                                         | 2022-04-08                                                                                                  |
| `checkDate`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The date on which employees will be paid for the payroll.                                                   | 2022-04-08                                                                                                  |
| `startDate`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The start date, inclusive, of the pay period.                                                               | 2022-04-08                                                                                                  |
| `endDate`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The end date, inclusive, of the pay period.                                                                 | 2022-04-21                                                                                                  |
| `totals`                                                                                                    | [components.PayrollTotals](../../models/components/payrolltotals.md)                                        | :heavy_minus_sign:                                                                                          | The overview of the payroll totals.                                                                         |                                                                                                             |
| `compensations`                                                                                             | [components.Compensation](../../models/components/compensation.md)[]                                        | :heavy_minus_sign:                                                                                          | An array of compensations for the payroll.                                                                  |                                                                                                             |
| `customMappings`                                                                                            | [components.CustomMappings](../../models/components/custommappings.md)                                      | :heavy_minus_sign:                                                                                          | When custom mappings are configured on the resource, the result is included here.                           |                                                                                                             |