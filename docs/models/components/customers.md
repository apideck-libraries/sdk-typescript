# Customers

## Example Usage

```typescript
import { Customers } from "apideck/models/components";

let value: Customers = {
  id: "12345",
  firstName: "Elon",
  middleName: "D.",
  lastName: "Musk",
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
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | 12345                                                              |
| `firstName`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | Elon                                                               |
| `middleName`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | D.                                                                 |
| `lastName`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | Musk                                                               |
| `phoneNumbers`                                                     | [components.PhoneNumber](../../models/components/phonenumber.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `emails`                                                           | [components.Email](../../models/components/email.md)[]             | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |