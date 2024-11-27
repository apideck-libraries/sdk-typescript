# CreateDepartmentResponse

Departments

## Example Usage

```typescript
import { CreateDepartmentResponse } from "@apideck/sdk/models/components";

let value: CreateDepartmentResponse = {
  statusCode: 200,
  status: "OK",
  service: "workday",
  resource: "Departments",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | HTTP Response Status Code                                    | 200                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | HTTP Response Status                                         | OK                                                           |
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | workday                                                      |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | Departments                                                  |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | add                                                          |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |