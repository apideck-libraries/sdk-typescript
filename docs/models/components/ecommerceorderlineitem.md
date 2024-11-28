# EcommerceOrderLineItem

A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.

## Example Usage

```typescript
import { EcommerceOrderLineItem } from "@apideck/unify/models/components";

let value: EcommerceOrderLineItem = {
  id: "12345",
  productId: "def456",
  variantId: "ghi789",
  sku: "MBP123-16GB-SILVER-13",
  name: "Midnight 16inch MacBook Pro",
  description:
    "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
  options: [
    {
      id: "jkl012",
      name: "Color",
      value: "Silver",
    },
  ],
  quantity: "2",
  unitPrice: "19.99",
  taxRate: "0.08",
  taxAmount: "1.6",
  isRefunded: false,
  refundedAmount: "0",
  refundedQuantity: "0",
  subTotal: "43.18",
  totalAmount: "43.18",
  discounts: [
    {
      code: "SUMMER20",
      amount: "5.99",
      percentage: "0.1",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A unique identifier for an object.                                                                           | 12345                                                                                                        |
| `productId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A unique identifier for the product associated with the line item.                                           | def456                                                                                                       |
| `variantId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A unique identifier for the variant of the product associated with the line item, if applicable.             | ghi789                                                                                                       |
| `sku`                                                                                                        | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The SKU of the product or variant associated with the line item.                                             | MBP123-16GB-SILVER-13                                                                                        |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the product or variant associated with the line item.                                            | Midnight 16inch MacBook Pro                                                                                  |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The description of the product or variant associated with the line item.                                     | Powerful and portable, the MacBook Pro is perfect for professionals and creatives.                           |
| `options`                                                                                                    | [components.Options](../../models/components/options.md)[]                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `quantity`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The quantity of the product or variant associated with the line item.                                        | 2                                                                                                            |
| `unitPrice`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The unit price of the product or variant associated with the line item.                                      | 19.99                                                                                                        |
| `taxRate`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The tax rate applied to the product or variant associated with the line item.                                | 0.08                                                                                                         |
| `taxAmount`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The total tax amount applied to the product or variant associated with the line item.                        | 1.6                                                                                                          |
| `isRefunded`                                                                                                 | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether the line item has been refunded.                                                                     | false                                                                                                        |
| `refundedAmount`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The amount of the line item that has been refunded.                                                          | 0                                                                                                            |
| `refundedQuantity`                                                                                           | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The quantity of the line item that has been refunded.                                                        | 0                                                                                                            |
| `subTotal`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The sub total for the product(s) or variant associated with the line item, excluding taxes and discounts.    | 43.18                                                                                                        |
| `totalAmount`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The total amount for the product(s) or variant associated with the line item, including taxes and discounts. | 43.18                                                                                                        |
| `discounts`                                                                                                  | [components.EcommerceDiscount](../../models/components/ecommercediscount.md)[]                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |