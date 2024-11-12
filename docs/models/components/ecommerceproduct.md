# EcommerceProduct

## Example Usage

```typescript
import { EcommerceProduct } from "apideck/models/components";

let value: EcommerceProduct = {
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | A unique identifier for an object.                                                               | 12345                                                                                            |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The name of the product as it should be displayed to customers.                                  | MacBook Pro                                                                                      |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | A detailed description of the product.                                                           | Powerful and portable, the MacBook Pro is perfect for professionals and creatives.               |
| `status`                                                                                         | [components.ProductStatus](../../models/components/productstatus.md)                             | :heavy_minus_sign:                                                                               | The current status of the product (active or archived).                                          | active                                                                                           |
| `price`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | The price of the product.                                                                        | 1999.99                                                                                          |
| `sku`                                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | The stock keeping unit of the product.                                                           | MBP123                                                                                           |
| `inventoryQuantity`                                                                              | *string*                                                                                         | :heavy_minus_sign:                                                                               | The quantity of the product in stock.                                                            | 10                                                                                               |
| `images`                                                                                         | [components.Images](../../models/components/images.md)[]                                         | :heavy_minus_sign:                                                                               | An array of image URLs for the product.                                                          |                                                                                                  |
| `weight`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | The weight of the product.                                                                       | 1.25                                                                                             |
| `weightUnit`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | The unit of measurement for the weight of the product.                                           | lb                                                                                               |
| `options`                                                                                        | [components.EcommerceProductOptions](../../models/components/ecommerceproductoptions.md)[]       | :heavy_minus_sign:                                                                               | An array of options for the product.                                                             |                                                                                                  |
| `variants`                                                                                       | [components.Variants](../../models/components/variants.md)[]                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `tags`                                                                                           | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | An array of tags for the product, used for organization and searching.                           |                                                                                                  |
| `categories`                                                                                     | [components.EcommerceProductCategories](../../models/components/ecommerceproductcategories.md)[] | :heavy_minus_sign:                                                                               | An array of categories for the product, used for organization and searching.                     |                                                                                                  |
| `customMappings`                                                                                 | [components.CustomMappings](../../models/components/custommappings.md)                           | :heavy_minus_sign:                                                                               | When custom mappings are configured on the resource, the result is included here.                |                                                                                                  |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | The date and time when the object was created.                                                   | 2020-09-30T07:43:32.000Z                                                                         |
| `updatedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | The date and time when the object was last updated.                                              | 2020-09-30T07:43:32.000Z                                                                         |