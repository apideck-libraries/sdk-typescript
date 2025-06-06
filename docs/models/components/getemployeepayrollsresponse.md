# GetEmployeePayrollsResponse

EmployeePayrolls

## Example Usage

```typescript
import { GetEmployeePayrollsResponse } from "@apideck/unify/models/components";

let value: GetEmployeePayrollsResponse = {
  statusCode: 200,
  status: "OK",
  service: "sage-hr",
  resource: "Employees",
  operation: "all",
  data: [
    {
      id: "12345",
      employeeId: "12345",
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
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status Code                                                  | 200                                                                        |
| `status`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status                                                       | OK                                                                         |
| `service`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Apideck ID of service provider                                             | sage-hr                                                                    |
| `resource`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Unified API resource name                                                  | Employees                                                                  |
| `operation`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Operation performed                                                        | all                                                                        |
| `data`                                                                     | [components.EmployeePayroll](../../models/components/employeepayroll.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `raw`                                                                      | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | Raw response from the integration when raw=true query param is provided    |                                                                            |