# GetAccountingDepartmentResponse

Location

## Example Usage

```typescript
import { GetAccountingDepartmentResponse } from "@apideck/sdk/models/components";

let value: GetAccountingDepartmentResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "subsidiaries",
  operation: "one",
  data: {
    id: "12345",
    parentId: "12345",
    name: "Sales",
    status: "active",
    subsidiaries: [
      {
        id: "12345",
        name: "SpaceX",
      },
    ],
    rowVersion: "1-12345",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `statusCode`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | HTTP Response Status Code                                                          | 200                                                                                |
| `status`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | HTTP Response Status                                                               | OK                                                                                 |
| `service`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Apideck ID of service provider                                                     | xero                                                                               |
| `resource`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | Unified API resource name                                                          | subsidiaries                                                                       |
| `operation`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Operation performed                                                                | one                                                                                |
| `data`                                                                             | [components.AccountingDepartment](../../models/components/accountingdepartment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |