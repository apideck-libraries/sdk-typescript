# GetItemsResponse

Items

## Example Usage

```typescript
import { GetItemsResponse } from "apideck/models/components";

let value: GetItemsResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Items",
  operation: "all",
  data: [
    {
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP Response Status Code                                   | 200                                                         |
| `status`                                                    | *string*                                                    | :heavy_check_mark:                                          | HTTP Response Status                                        | OK                                                          |
| `service`                                                   | *string*                                                    | :heavy_check_mark:                                          | Apideck ID of service provider                              | square                                                      |
| `resource`                                                  | *string*                                                    | :heavy_check_mark:                                          | Unified API resource name                                   | Items                                                       |
| `operation`                                                 | *string*                                                    | :heavy_check_mark:                                          | Operation performed                                         | all                                                         |
| `data`                                                      | [components.Item](../../models/components/item.md)[]        | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `meta`                                                      | [components.Meta](../../models/components/meta.md)          | :heavy_minus_sign:                                          | Response metadata                                           |                                                             |
| `links`                                                     | [components.Links](../../models/components/links.md)        | :heavy_minus_sign:                                          | Links to navigate to previous or next pages through the API |                                                             |