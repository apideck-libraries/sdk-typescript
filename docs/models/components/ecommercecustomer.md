# EcommerceCustomer

## Example Usage

```typescript
import { EcommerceCustomer } from "@apideck/unify/models/components";

let value: EcommerceCustomer = {
  id: "12345",
  name: "John Doe",
  firstName: "John",
  lastName: "Doe",
  companyName: "Acme Inc.",
  status: "active",
  currency: "USD",
  emails: [
    {
      id: "123",
      email: "elon@musk.com",
      type: "primary",
    },
  ],
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
  addresses: [
    {
      type: "billing",
      id: "12345",
      line1: "Main street",
      line2: "apt #",
      city: "Anytown",
      state: "Ohio",
      postalCode: "12345",
      country: "US",
    },
  ],
  orders: [
    {
      id: "12345",
      total: "199.99",
      status: "active",
    },
  ],
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Full name of the customer                                                                                                          | John Doe                                                                                                                           |
| `firstName`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | First name of the customer                                                                                                         | John                                                                                                                               |
| `lastName`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Last name of the customer                                                                                                          | Doe                                                                                                                                |
| `companyName`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Company name of the customer                                                                                                       | Acme Inc.                                                                                                                          |
| `status`                                                                                                                           | [components.CustomerStatus](../../models/components/customerstatus.md)                                                             | :heavy_minus_sign:                                                                                                                 | The current status of the customer                                                                                                 | active                                                                                                                             |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `emails`                                                                                                                           | [components.Email](../../models/components/email.md)[]                                                                             | :heavy_minus_sign:                                                                                                                 | An array of email addresses for the customer.                                                                                      |                                                                                                                                    |
| `phoneNumbers`                                                                                                                     | [components.PhoneNumber](../../models/components/phonenumber.md)[]                                                                 | :heavy_minus_sign:                                                                                                                 | An array of phone numbers for the customer.                                                                                        |                                                                                                                                    |
| `addresses`                                                                                                                        | [components.Addresses](../../models/components/addresses.md)[]                                                                     | :heavy_minus_sign:                                                                                                                 | An array of addresses for the customer.                                                                                            |                                                                                                                                    |
| `orders`                                                                                                                           | [components.LinkedEcommerceOrder](../../models/components/linkedecommerceorder.md)[]                                               | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `customMappings`                                                                                                                   | [components.CustomMappings](../../models/components/custommappings.md)                                                             | :heavy_minus_sign:                                                                                                                 | When custom mappings are configured on the resource, the result is included here.                                                  |                                                                                                                                    |
| `createdAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when the object was created.                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                           |
| `updatedAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when the object was last updated.                                                                                | 2020-09-30T07:43:32.000Z                                                                                                           |