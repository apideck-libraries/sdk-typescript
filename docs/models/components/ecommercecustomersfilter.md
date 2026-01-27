# EcommerceCustomersFilter

## Example Usage

```typescript
import { EcommerceCustomersFilter } from "@apideck/unify/models/components";

let value: EcommerceCustomersFilter = {
  email: "elon@musk.com",
  phoneNumber: "111-111-1111",
  customerIds: [
    "12345",
    "67890",
  ],
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `email`                             | *string*                            | :heavy_minus_sign:                  | Customer email address to filter on | elon@musk.com                       |
| `phoneNumber`                       | *string*                            | :heavy_minus_sign:                  | Customer phone number to filter on  | 111-111-1111                        |
| `customerIds`                       | *string*[]                          | :heavy_minus_sign:                  | Filter by customer IDs              | [<br/>"12345",<br/>"67890"<br/>]    |