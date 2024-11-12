# LeadsFilter

## Example Usage

```typescript
import { LeadsFilter } from "apideck/models/components";

let value: LeadsFilter = {
  name: "Elon Musk",
  firstName: "Elon",
  lastName: "Musk",
  email: "elon@tesla.com",
  phoneNumber: "1234567890",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `name`                                | *string*                              | :heavy_minus_sign:                    | Name of the lead to filter on         | Elon Musk                             |
| `firstName`                           | *string*                              | :heavy_minus_sign:                    | First name of the lead to filter on   | Elon                                  |
| `lastName`                            | *string*                              | :heavy_minus_sign:                    | Last name of the lead to filter on    | Musk                                  |
| `email`                               | *string*                              | :heavy_minus_sign:                    | E-mail of the lead to filter on       | elon@tesla.com                        |
| `phoneNumber`                         | *string*                              | :heavy_minus_sign:                    | Phone number of the lead to filter on | 1234567890                            |