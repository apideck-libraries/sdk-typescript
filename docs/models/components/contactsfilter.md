# ContactsFilter

## Example Usage

```typescript
import { ContactsFilter } from "@apideck/sdk/models/components";

let value: ContactsFilter = {
  firstName: "Elon",
  lastName: "Musk",
  email: "elon@tesla.com",
  companyId: "12345",
  ownerId: "12345",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name of the contact to filter on                                         | Elon Musk                                                                |
| `firstName`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | First name of the contact to filter on                                   | Elon                                                                     |
| `lastName`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | Last name of the contact to filter on                                    | Musk                                                                     |
| `email`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | Email of the contact to filter on                                        | elon@tesla.com                                                           |
| `phoneNumber`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Phone number of the contact to filter on                                 | 111-111-1111                                                             |
| `companyId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for the associated company of the contact to filter on | 12345                                                                    |
| `ownerId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for the owner of the contact to filter on              | 12345                                                                    |