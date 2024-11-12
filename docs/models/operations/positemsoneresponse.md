# PosItemsOneResponse


## Supported Types

### `components.GetItemResponse`

```typescript
const value: components.GetItemResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Items",
  operation: "one",
  data: {
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
        id: "12345",
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
        id: "12345",
        name: "Food",
        sku: "11910345",
        itemId: "12345",
        sequence: 0,
        pricingType: "fixed",
        priceAmount: 10,
        priceCurrency: "USD",
        stockable: false,
        presentAtAllLocations: false,
        version: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
      },
    ],
    modifierGroups: [
      {
        id: "12345",
      },
    ],
    available: true,
    hidden: true,
    version: "12345",
    deleted: true,
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

### `components.UnexpectedErrorResponse`

```typescript
const value: components.UnexpectedErrorResponse = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

