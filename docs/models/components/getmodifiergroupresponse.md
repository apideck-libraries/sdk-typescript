# GetModifierGroupResponse

ModifierGroups

## Example Usage

```typescript
import { GetModifierGroupResponse } from "apideck/models/components";

let value: GetModifierGroupResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "ModifierGroups",
  operation: "one",
  data: {
    id: "12345",
    name: "Modifier",
    alternateName: "Modifier New",
    minimumRequired: 1,
    maximumAllowed: 5,
    selectionType: "single",
    presentAtAllLocations: false,
    modifiers: [
      {
        id: "12345",
        name: "Modifier",
        alternateName: "Modifier New",
        priceAmount: 10,
        currency: "USD",
        available: true,
      },
    ],
    deleted: true,
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP Response Status Code                                            | 200                                                                  |
| `status`                                                             | *string*                                                             | :heavy_check_mark:                                                   | HTTP Response Status                                                 | OK                                                                   |
| `service`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Apideck ID of service provider                                       | square                                                               |
| `resource`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Unified API resource name                                            | ModifierGroups                                                       |
| `operation`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Operation performed                                                  | one                                                                  |
| `data`                                                               | [components.ModifierGroup](../../models/components/modifiergroup.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |