# ModifierInput

## Example Usage

```typescript
import { ModifierInput } from "apideck/models/components";

let value: ModifierInput = {
  idempotencyKey: "random_string",
  name: "Modifier",
  alternateName: "Modifier New",
  priceAmount: 10,
  currency: "USD",
  modifierGroupId: "123",
  available: true,
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
| `idempotencyKey`                                                                                                                                        | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A value you specify that uniquely identifies this request among requests you have sent.                                                                 | random_string                                                                                                                                           |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     | Modifier                                                                                                                                                |
| `alternateName`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | Modifier New                                                                                                                                            |
| `priceAmount`                                                                                                                                           | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 10                                                                                                                                                      |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `modifierGroupId`                                                                                                                                       | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     | 123                                                                                                                                                     |
| `available`                                                                                                                                             | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | true                                                                                                                                                    |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |