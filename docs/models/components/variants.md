# Variants

## Example Usage

```typescript
import { Variants } from "apideck/models/components";

let value: Variants = {
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
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A unique identifier for the variant of the product.                                                        | 1                                                                                                          |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The name for the variant, used for displaying to customers.                                                | Midnight 16inch MacBook Pro                                                                                |
| `price`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The price of the variant.                                                                                  | 1999.99                                                                                                    |
| `sku`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The stock keeping unit of the variant.                                                                     | MBP123-16GB-SILVER-13                                                                                      |
| `inventoryQuantity`                                                                                        | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The quantity of the variant in stock.                                                                      | 5                                                                                                          |
| `weight`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The weight of the variant.                                                                                 | 1.25                                                                                                       |
| `weightUnit`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The unit of measurement for the weight of the variant.                                                     | lb                                                                                                         |
| `options`                                                                                                  | [components.EcommerceProductVariantsOptions](../../models/components/ecommerceproductvariantsoptions.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `images`                                                                                                   | [components.EcommerceProductImages](../../models/components/ecommerceproductimages.md)[]                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |