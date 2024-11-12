# TenderInput

## Example Usage

```typescript
import { TenderInput } from "apideck/models/components";

let value: TenderInput = {
  key: "com.clover.tender.cash",
  label: "Cash",
  active: true,
  hidden: true,
  editable: true,
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
| `key`                                                                                                                                                   | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | com.clover.tender.cash                                                                                                                                  |
| `label`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | Cash                                                                                                                                                    |
| `active`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | true                                                                                                                                                    |
| `hidden`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | true                                                                                                                                                    |
| `editable`                                                                                                                                              | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | true                                                                                                                                                    |
| `opensCashDrawer`                                                                                                                                       | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | If this tender opens the cash drawer                                                                                                                    |                                                                                                                                                         |
| `allowsTipping`                                                                                                                                         | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Allow tipping on payment from tender                                                                                                                    |                                                                                                                                                         |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |