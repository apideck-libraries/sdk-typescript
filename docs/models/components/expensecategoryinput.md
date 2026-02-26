# ExpenseCategoryInput

## Example Usage

```typescript
import { ExpenseCategoryInput } from "@apideck/unify/models/components";

let value: ExpenseCategoryInput = {
  displayId: "123456",
  name: "Travel",
  code: "TRAVEL-001",
  description:
    "Travel-related expenses including flights, hotels, and ground transportation.",
  status: "active",
  account: {
    id: "123456",
    name: "Bank account",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
  },
  offsetAccount: {
    id: "123456",
    name: "Bank account",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
  },
  taxRate: {
    id: "123456",
    code: "N-T",
    rate: 10,
  },
  rateRequired: false,
  defaultRate: 0.67,
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
| `displayId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Id to be displayed.                                                                                                                                     | 123456                                                                                                                                                  |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The name of the expense category.                                                                                                                       | Travel                                                                                                                                                  |
| `code`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The code or external identifier of the expense category.                                                                                                | TRAVEL-001                                                                                                                                              |
| `description`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The description of the expense category.                                                                                                                | Travel-related expenses including flights, hotels, and ground transportation.                                                                           |
| `status`                                                                                                                                                | [components.ExpenseCategoryStatus](../../models/components/expensecategorystatus.md)                                                                    | :heavy_minus_sign:                                                                                                                                      | The status of the expense category.                                                                                                                     | active                                                                                                                                                  |
| `account`                                                                                                                                               | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `offsetAccount`                                                                                                                                         | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `taxRate`                                                                                                                                               | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md)                                                                          | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rateRequired`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the expense category requires rate/quantity entry (e.g. mileage at $/mile).                                                                     | false                                                                                                                                                   |
| `defaultRate`                                                                                                                                           | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Default rate when rate_required is true (e.g. 0.67 for mileage).                                                                                        | 0.67                                                                                                                                                    |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |