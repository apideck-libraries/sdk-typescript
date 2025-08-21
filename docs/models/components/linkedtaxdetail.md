# LinkedTaxDetail

## Example Usage

```typescript
import { LinkedTaxDetail } from "@apideck/unify/models/components";

let value: LinkedTaxDetail = {
  type: "GST on Purchases",
  number: "123456",
  isTransactionTax: true,
  isPrimaryTax: true,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `type`                                | *string*                              | :heavy_minus_sign:                    | The type of tax.                      | GST on Purchases                      |
| `number`                              | *string*                              | :heavy_minus_sign:                    | The number of the tax.                | 123456                                |
| `isTransactionTax`                    | *boolean*                             | :heavy_minus_sign:                    | Whether the tax is a transaction tax. | true                                  |
| `isPrimaryTax`                        | *boolean*                             | :heavy_minus_sign:                    | Whether the tax is a primary tax.     | true                                  |