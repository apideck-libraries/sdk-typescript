# EcommerceOrdersFilter

## Example Usage

```typescript
import { EcommerceOrdersFilter } from "@apideck/sdk/models/components";

let value: EcommerceOrdersFilter = {
  email: "elon@musk.com",
  customerId: "123",
  updatedSince: "2020-09-30T07:43:32.000Z",
  createdSince: "2020-09-30T07:43:32.000Z",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `email`                                  | *string*                                 | :heavy_minus_sign:                       | Customer email address to filter on      | elon@musk.com                            |
| `customerId`                             | *string*                                 | :heavy_minus_sign:                       | Customer id to filter on                 | 123                                      |
| `updatedSince`                           | *string*                                 | :heavy_minus_sign:                       | Minimum date the order was last modified | 2020-09-30T07:43:32.000Z                 |
| `createdSince`                           | *string*                                 | :heavy_minus_sign:                       | Minimum date the order was created       | 2020-09-30T07:43:32.000Z                 |