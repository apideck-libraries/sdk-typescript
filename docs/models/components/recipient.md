# Recipient

## Example Usage

```typescript
import { Recipient } from "apideck/models/components";

let value: Recipient = {
  customerId: "12345",
  displayName: "Elon Musk",
  address: {
    id: "123",
    type: "primary",
    string: "25 Spring Street, Blackburn, VIC 3130",
    name: "HQ US",
    line1: "Main street",
    line2: "apt #",
    line3: "Suite #",
    line4: "delivery instructions",
    streetNumber: "25",
    city: "San Francisco",
    state: "CA",
    postalCode: "94104",
    country: "US",
    latitude: "40.759211",
    longitude: "-73.984638",
    county: "Santa Clara",
    contactName: "Elon Musk",
    salutation: "Mr",
    phoneNumber: "111-111-1111",
    fax: "122-111-1111",
    email: "elon@musk.com",
    website: "https://elonmusk.com",
    notes: "Address notes or delivery instructions.",
    rowVersion: "1-12345",
  },
  phoneNumber: {
    id: "12345",
    countryCode: "1",
    areaCode: "323",
    number: "111-111-1111",
    extension: "105",
    type: "primary",
  },
  email: {
    id: "123",
    email: "elon@musk.com",
    type: "primary",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `customerId`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 12345                                                            |
| `displayName`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | Elon Musk                                                        |
| `address`                                                        | [components.Address](../../models/components/address.md)         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `phoneNumber`                                                    | [components.PhoneNumber](../../models/components/phonenumber.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `email`                                                          | [components.Email](../../models/components/email.md)             | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |