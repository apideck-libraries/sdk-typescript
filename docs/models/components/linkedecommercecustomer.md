# LinkedEcommerceCustomer

The customer this entity is linked to.

## Example Usage

```typescript
import { LinkedEcommerceCustomer } from "@apideck/unify/models/components";

let value: LinkedEcommerceCustomer = {
  id: "12345",
  name: "John Doe",
  firstName: "John",
  lastName: "Doe",
  companyName: "Acme Inc.",
  phoneNumbers: [
    {
      id: "12345",
      countryCode: "1",
      areaCode: "323",
      number: "111-111-1111",
      extension: "105",
      type: "primary",
    },
  ],
  emails: [
    {
      id: "123",
      email: "elon@musk.com",
      type: "primary",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | The ID of the customer this entity is linked to.                   | 12345                                                              |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Full name of the customer                                          | John Doe                                                           |
| `firstName`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | First name of the customer                                         | John                                                               |
| `lastName`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Last name of the customer                                          | Doe                                                                |
| `companyName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Company name of the customer                                       | Acme Inc.                                                          |
| `phoneNumbers`                                                     | [components.PhoneNumber](../../models/components/phonenumber.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `emails`                                                           | [components.Email](../../models/components/email.md)[]             | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |