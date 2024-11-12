# LineItems

## Example Usage

```typescript
import { LineItems } from "apideck/models/components";

let value: LineItems = {
  id: "12345",
  name: "New York Strip Steak",
  item: {
    id: "12345",
  },
  totalTax: 2000,
  totalDiscount: 3000,
  totalAmount: 27500,
  quantity: 1,
  unitPrice: 27500.5,
  appliedTaxes: [
    {
      id: "12345",
      taxId: "sales-tax",
      amount: 27500,
      currency: "USD",
    },
  ],
  appliedDiscounts: [
    {
      id: "12345",
      discountId: "12345",
      amount: 27500,
      currency: "USD",
    },
  ],
  modifiers: [
    {
      id: "12345",
      name: "New York Strip Steak - no cheese",
      amount: 27500,
      currency: "USD",
      alternateName: "Modifier New",
      modifierGroupId: "123",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | A unique identifier for an object.                                                                                                                                          | 12345                                                                                                                                                                       |
| `name`                                                                                                                                                                      | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | New York Strip Steak                                                                                                                                                        |
| `item`                                                                                                                                                                      | [components.OrderItem](../../models/components/orderitem.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `totalTax`                                                                                                                                                                  | *number*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | 2000                                                                                                                                                                        |
| `totalDiscount`                                                                                                                                                             | *number*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | 3000                                                                                                                                                                        |
| `totalAmount`                                                                                                                                                               | *number*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | 27500                                                                                                                                                                       |
| `quantity`                                                                                                                                                                  | *number*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | 1                                                                                                                                                                           |
| `unitPrice`                                                                                                                                                                 | *number*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         | 27500.5                                                                                                                                                                     |
| `appliedTaxes`                                                                                                                                                              | [components.AppliedTaxes](../../models/components/appliedtaxes.md)[]                                                                                                        | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `appliedDiscounts`                                                                                                                                                          | [components.AppliedDiscounts](../../models/components/applieddiscounts.md)[]                                                                                                | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `modifiers`                                                                                                                                                                 | [components.OrderModifiers](../../models/components/ordermodifiers.md)[]                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts |                                                                                                                                                                             |