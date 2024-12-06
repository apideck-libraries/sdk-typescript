# SupplierInput

## Example Usage

```typescript
import { SupplierInput } from "@apideck/unify/models/components";

let value: SupplierInput = {
  displayId: "EMP00101",
  displayName: "Windsurf Shop",
  companyName: "SpaceX",
  companyId: "12345",
  title: "CEO",
  firstName: "Elon",
  middleName: "D.",
  lastName: "Musk",
  suffix: "Jr.",
  individual: true,
  addresses: [
    {
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
  emails: [
    {
      id: "123",
      email: "elon@musk.com",
      type: "primary",
    },
  ],
  websites: [
    {
      id: "12345",
      url: "http://example.com",
      type: "primary",
    },
  ],
  bankAccounts: [
    {
      bankName: "Monzo",
      accountNumber: "123465",
      accountName: "SPACEX LLC",
      accountType: "credit_card",
      iban: "CH2989144532982975332",
      bic: "AUDSCHGGXXX",
      routingNumber: "012345678",
      bsbNumber: "062-001",
      branchIdentifier: "001",
      bankCode: "BNH",
      currency: "USD",
    },
  ],
  notes: "Some notes about this supplier",
  taxRate: {
    id: "123456",
    rate: 10,
  },
  taxNumber: "US123945459",
  currency: "USD",
  account: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
  },
  status: "active",
  paymentMethod: "cash",
  channel: "email",
  rowVersion: "1-12345",
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
  subsidiaryId: "12345",
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Display ID                                                                                                                                              | EMP00101                                                                                                                                                |
| `displayName`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Display name                                                                                                                                            | Windsurf Shop                                                                                                                                           |
| `companyName`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the company.                                                                                                                                | SpaceX                                                                                                                                                  |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company or subsidiary id the transaction belongs to                                                                                                 | 12345                                                                                                                                                   |
| `title`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The job title of the person.                                                                                                                            | CEO                                                                                                                                                     |
| `firstName`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The first name of the person.                                                                                                                           | Elon                                                                                                                                                    |
| `middleName`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Middle name of the person.                                                                                                                              | D.                                                                                                                                                      |
| `lastName`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The last name of the person.                                                                                                                            | Musk                                                                                                                                                    |
| `suffix`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | Jr.                                                                                                                                                     |
| `individual`                                                                                                                                            | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Is this an individual or business supplier                                                                                                              | true                                                                                                                                                    |
| `addresses`                                                                                                                                             | [components.Address](../../models/components/address.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `phoneNumbers`                                                                                                                                          | [components.PhoneNumber](../../models/components/phonenumber.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `emails`                                                                                                                                                | [components.Email](../../models/components/email.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `websites`                                                                                                                                              | [components.Website](../../models/components/website.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `bankAccounts`                                                                                                                                          | [components.BankAccount](../../models/components/bankaccount.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `notes`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Some notes about this supplier                                                                                                                          | Some notes about this supplier                                                                                                                          |
| `taxRate`                                                                                                                                               | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md)                                                                          | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `taxNumber`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | US123945459                                                                                                                                             |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `account`                                                                                                                                               | [components.LinkedLedgerAccountInput](../../models/components/linkedledgeraccountinput.md)                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `status`                                                                                                                                                | [components.SupplierStatus](../../models/components/supplierstatus.md)                                                                                  | :heavy_minus_sign:                                                                                                                                      | Supplier status                                                                                                                                         | active                                                                                                                                                  |
| `paymentMethod`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Payment method used for the transaction, such as cash, credit card, bank transfer, or check                                                             | cash                                                                                                                                                    |
| `channel`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The channel through which the transaction is processed.                                                                                                 | email                                                                                                                                                   |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |
| `subsidiaryId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The subsidiary the supplier belongs to.                                                                                                                 | 12345                                                                                                                                                   |