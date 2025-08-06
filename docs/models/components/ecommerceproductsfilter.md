# EcommerceProductsFilter

## Example Usage

```typescript
import { EcommerceProductsFilter } from "@apideck/unify/models/components";

let value: EcommerceProductsFilter = {
  name: "Product Name",
  updatedSince: "2020-09-30T07:43:32.000Z",
  createdSince: "2020-09-30T07:43:32.000Z",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | Product name to filter on                  | Product Name                               |
| `updatedSince`                             | *string*                                   | :heavy_minus_sign:                         | Minimum date the product was last modified | 2020-09-30T07:43:32.000Z                   |
| `createdSince`                             | *string*                                   | :heavy_minus_sign:                         | Minimum date the product was created       | 2020-09-30T07:43:32.000Z                   |