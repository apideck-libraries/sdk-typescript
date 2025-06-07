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
  data: [],
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