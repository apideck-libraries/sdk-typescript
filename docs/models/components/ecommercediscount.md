# EcommerceDiscount

An object representing a discount applied to an ecommerce order or product.

## Example Usage

```typescript
import { EcommerceDiscount } from "@apideck/sdk/models/components";

let value: EcommerceDiscount = {
  code: "SUMMER20",
  amount: "5.99",
  percentage: "0.1",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `code`                               | *string*                             | :heavy_minus_sign:                   | The code used to apply the discount. | SUMMER20                             |
| `amount`                             | *string*                             | :heavy_minus_sign:                   | The fixed amount of the discount.    | 5.99                                 |
| `percentage`                         | *string*                             | :heavy_minus_sign:                   | The percentage of the discount.      | 0.1                                  |