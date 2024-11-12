# PosItemsUpdateRequest

## Example Usage

```typescript
import { PosItemsUpdateRequest } from "apideck/models/operations";

let value: PosItemsUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  item: {
    id: "#cocoa",
    idempotencyKey: "random_string",
    name: "Cocoa",
    description: "Hot Chocolate",
    abbreviation: "Ch",
    productType: "regular",
    priceAmount: 10,
    pricingType: "fixed",
    priceCurrency: "USD",
    cost: 2,
    taxIds: [
      "12345",
      "67890",
    ],
    isRevenue: false,
    useDefaultTaxRates: false,
    absentAtLocationIds: [
      "12345",
      "67890",
    ],
    presentAtAllLocations: false,
    availableForPickup: false,
    availableOnline: false,
    sku: "11910345",
    code: "11910345",
    categories: [
      {
        name: "Food",
        imageIds: [
          "12345",
          "67890",
        ],
      },
    ],
    options: [
      {
        id: "12345",
        name: "Option 1",
        attributeId: "12345",
      },
    ],
    variations: [
      {
        name: "Food",
        sku: "11910345",
        sequence: 0,
        pricingType: "fixed",
        priceAmount: 10,
        priceCurrency: "USD",
        stockable: false,
        presentAtAllLocations: false,
      },
    ],
    modifierGroups: [
      {},
    ],
    available: true,
    hidden: true,
    deleted: true,
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
| `item`                                                                                                                                        | [components.ItemInput](../../models/components/iteminput.md)                                                                                  | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |