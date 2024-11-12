# PosModifierGroupsAddRequest

## Example Usage

```typescript
import { PosModifierGroupsAddRequest } from "apideck/models/operations";

let value: PosModifierGroupsAddRequest = {
  serviceId: "salesforce",
  modifierGroup: {
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
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `modifierGroup`                                                                                                                               | [components.ModifierGroupInput](../../models/components/modifiergroupinput.md)                                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |