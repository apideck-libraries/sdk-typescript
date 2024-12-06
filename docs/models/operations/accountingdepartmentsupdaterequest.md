# AccountingDepartmentsUpdateRequest

## Example Usage

```typescript
import { AccountingDepartmentsUpdateRequest } from "@apideck/unify/models/operations";

let value: AccountingDepartmentsUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  accountingDepartment: {
    parentId: "12345",
    name: "Sales",
    status: "active",
    subsidiaries: [
      {
        name: "SpaceX",
      },
    ],
    rowVersion: "1-12345",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `accountingDepartment`                                                                                                                        | [components.AccountingDepartmentInput](../../models/components/accountingdepartmentinput.md)                                                  | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |