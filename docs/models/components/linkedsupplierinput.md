# LinkedSupplierInput

The supplier this entity is linked to.

## Example Usage

```typescript
import { LinkedSupplierInput } from "@apideck/unify/models/components";

let value: LinkedSupplierInput = {
  id: "12345",
  displayName: "Windsurf Shop",
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | The ID of the supplier this entity is linked to.         | 12345                                                    |
| `displayName`                                            | *string*                                                 | :heavy_minus_sign:                                       | The display name of the supplier.                        | Windsurf Shop                                            |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |