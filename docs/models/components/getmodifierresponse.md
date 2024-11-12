# GetModifierResponse

Modifiers

## Example Usage

```typescript
import { GetModifierResponse } from "apideck/models/components";

let value: GetModifierResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Modifiers",
  operation: "one",
  data: {
    id: "12345",
    idempotencyKey: "random_string",
    name: "Modifier",
    alternateName: "Modifier New",
    priceAmount: 10,
    currency: "USD",
    modifierGroupId: "123",
    available: true,
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

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | HTTP Response Status Code                                  | 200                                                        |
| `status`                                                   | *string*                                                   | :heavy_check_mark:                                         | HTTP Response Status                                       | OK                                                         |
| `service`                                                  | *string*                                                   | :heavy_check_mark:                                         | Apideck ID of service provider                             | square                                                     |
| `resource`                                                 | *string*                                                   | :heavy_check_mark:                                         | Unified API resource name                                  | Modifiers                                                  |
| `operation`                                                | *string*                                                   | :heavy_check_mark:                                         | Operation performed                                        | one                                                        |
| `data`                                                     | [components.Modifier](../../models/components/modifier.md) | :heavy_check_mark:                                         | N/A                                                        |                                                            |