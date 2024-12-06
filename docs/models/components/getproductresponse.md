# GetProductResponse

Products

## Example Usage

```typescript
import { GetProductResponse } from "@apideck/unify/models/components";

let value: GetProductResponse = {
  statusCode: 200,
  status: "OK",
  service: "shopify",
  resource: "products",
  operation: "one",
  data: {
    id: "12345",
    name: "MacBook Pro",
    description:
      "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
    status: "active",
    price: "1999.99",
    sku: "MBP123",
    inventoryQuantity: "10",
    images: [
      {
        id: "12345",
        url: "https://example.com/macbook-pro.jpg",
      },
    ],
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status Code                                                  | 200                                                                        |
| `status`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status                                                       | OK                                                                         |
| `service`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Apideck ID of service provider                                             | shopify                                                                    |
| `resource`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Unified API resource name                                                  | products                                                                   |
| `operation`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Operation performed                                                        | one                                                                        |
| `data`                                                                     | [components.EcommerceProduct](../../models/components/ecommerceproduct.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |