# GetDepartmentResponse

Departments

## Example Usage

```typescript
import { GetDepartmentResponse } from "apideck/models/components";

let value: GetDepartmentResponse = {
  statusCode: 200,
  status: "OK",
  service: "workday",
  resource: "Departments",
  operation: "one",
  data: {
    id: "12345",
    parentId: "22345",
    name: "R&D",
    code: "2",
    description: "R&D",
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    passThrough: [
      {
        serviceId: "<id>",
        extendPaths: [
          {
            path: "$.nested.property",
            value: {
              "TaxClassificationRef": {
                "value": "EUC-99990201-V1-00020000",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `statusCode`                                                   | *number*                                                       | :heavy_check_mark:                                             | HTTP Response Status Code                                      | 200                                                            |
| `status`                                                       | *string*                                                       | :heavy_check_mark:                                             | HTTP Response Status                                           | OK                                                             |
| `service`                                                      | *string*                                                       | :heavy_check_mark:                                             | Apideck ID of service provider                                 | workday                                                        |
| `resource`                                                     | *string*                                                       | :heavy_check_mark:                                             | Unified API resource name                                      | Departments                                                    |
| `operation`                                                    | *string*                                                       | :heavy_check_mark:                                             | Operation performed                                            | one                                                            |
| `data`                                                         | [components.Department](../../models/components/department.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |