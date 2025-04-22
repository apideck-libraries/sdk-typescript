# AccountingDepartmentInput

## Example Usage

```typescript
import { AccountingDepartmentInput } from "@apideck/unify/models/components";

let value: AccountingDepartmentInput = {
  parentId: "12345",
  name: "Sales",
  status: "active",
  subsidiaries: [
    {
      name: "SpaceX",
    },
  ],
  code: "123",
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `parentId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for an object.                                                                                                                      | 12345                                                                                                                                                   |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the department.                                                                                                                             | Sales                                                                                                                                                   |
| `status`                                                                                                                                                | [components.DepartmentStatus](../../models/components/departmentstatus.md)                                                                              | :heavy_minus_sign:                                                                                                                                      | Based on the status some functionality is enabled or disabled.                                                                                          | active                                                                                                                                                  |
| `subsidiaries`                                                                                                                                          | [components.SubsidiaryReferenceInput](../../models/components/subsidiaryreferenceinput.md)[]                                                            | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `code`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The code of the department.                                                                                                                             | 123                                                                                                                                                     |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |