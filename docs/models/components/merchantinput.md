# MerchantInput

## Example Usage

```typescript
import { MerchantInput } from "apideck/models/components";

let value: MerchantInput = {
  name: "Dunkin Donuts",
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
  ownerId: "12345",
  mainLocationId: "12345",
  status: "active",
  serviceCharges: [
    {
      name: "Charge for delivery",
      amount: 27500,
      percentage: 12.5,
      currency: "USD",
      active: true,
    },
  ],
  language: "EN",
  currency: "USD",
  passThrough: [
    {
      serviceId: "<id>",
      extendPaths: [
        {
          path: "$.nested.property",
          value: {
            "TaxClassificationRef": {
              "value": "EUC-99990201-V1-00020000",
            },
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the merchant                                                                                                                                | Dunkin Donuts                                                                                                                                           |
| `address`                                                                                                                                               | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `ownerId`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 12345                                                                                                                                                   |
| `mainLocationId`                                                                                                                                        | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The main location ID of the merchant                                                                                                                    | 12345                                                                                                                                                   |
| `status`                                                                                                                                                | [components.MerchantStatus](../../models/components/merchantstatus.md)                                                                                  | :heavy_minus_sign:                                                                                                                                      | Status of this merchant.                                                                                                                                | active                                                                                                                                                  |
| `serviceCharges`                                                                                                                                        | [components.ServiceChargeInput](../../models/components/servicechargeinput.md)[]                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `language`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | language code according to ISO 639-1. For the United States - EN                                                                                        | EN                                                                                                                                                      |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |