# GetProductsResponse

Products

## Example Usage

```typescript
import { GetProductsResponse } from "@apideck/unify/models/components";

let value: GetProductsResponse = {
  statusCode: 200,
  status: "OK",
  service: "shopify",
  resource: "products",
  operation: "all",
  data: [
    {
      id: "12345",
      name: "MacBook Pro",
      description:
        "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
      status: "active",
      price: "1999.99",
      sku: "MBP123",
      inventoryQuantity: "10",
      images: null,
      weight: "1.25",
      weightUnit: "lb",
      options: [
        {
          id: "1",
          name: "Color",
          values: [
            "Red",
          ],
        },
      ],
      variants: [
        {
          id: "1",
          name: "Midnight 16inch MacBook Pro",
          price: "1999.99",
          sku: "MBP123-16GB-SILVER-13",
          inventoryQuantity: "5",
          weight: "1.25",
          weightUnit: "lb",
          options: [
            {
              id: "1",
              name: "Color",
              value: "Silver",
            },
          ],
          images: [
            {
              id: "12345",
              url: "https://example.com/macbook-pro.jpg",
            },
          ],
        },
      ],
      tags: [
        "Apple",
      ],
      categories: [
        {
          id: "12345",
          name: "Laptops",
        },
      ],
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status Code                                                    | 200                                                                          |
| `status`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status                                                         | OK                                                                           |
| `service`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Apideck ID of service provider                                               | shopify                                                                      |
| `resource`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Unified API resource name                                                    | products                                                                     |
| `operation`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Operation performed                                                          | all                                                                          |
| `data`                                                                       | [components.EcommerceProduct](../../models/components/ecommerceproduct.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `raw`                                                                        | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Raw response from the integration when raw=true query param is provided      |                                                                              |
| `meta`                                                                       | [components.Meta](../../models/components/meta.md)                           | :heavy_minus_sign:                                                           | Response metadata                                                            |                                                                              |
| `links`                                                                      | [components.Links](../../models/components/links.md)                         | :heavy_minus_sign:                                                           | Links to navigate to previous or next pages through the API                  |                                                                              |