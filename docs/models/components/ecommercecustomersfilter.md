# EcommerceCustomersFilter

## Example Usage

```typescript
import { EcommerceCustomersFilter } from "@apideck/unify/models/components";

let value: EcommerceCustomersFilter = {
  email: "elon@musk.com",
  phoneNumber: "111-111-1111",
  customerIds: "12345,67890",
  updatedSince: "2020-09-30T07:43:32.000Z",
  createdSince: "2020-09-30T07:43:32.000Z",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `email`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Customer email address to filter on                                       | elon@musk.com                                                             |
| `phoneNumber`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Customer phone number to filter on                                        | 111-111-1111                                                              |
| `customerIds`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Filter by customer IDs. Specify multiple IDs as a comma-separated string. | 12345,67890                                                               |
| `updatedSince`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Minimum date the customer was last modified                               | 2020-09-30T07:43:32.000Z                                                  |
| `createdSince`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Minimum date the customer was created                                     | 2020-09-30T07:43:32.000Z                                                  |