# LinkedTaxRate

## Example Usage

```typescript
import { LinkedTaxRate } from "@apideck/sdk/models/components";

let value: LinkedTaxRate = {
  id: "123456",
  code: "N-T",
  name: "GST on Purchases",
  rate: 10,
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_minus_sign:    | The ID of the object. | 123456                |
| `code`                | *string*              | :heavy_minus_sign:    | Tax rate code         | N-T                   |
| `name`                | *string*              | :heavy_minus_sign:    | Name of the tax rate  | GST on Purchases      |
| `rate`                | *number*              | :heavy_minus_sign:    | Rate of the tax rate  | 10                    |