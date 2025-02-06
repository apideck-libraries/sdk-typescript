# GetSupplierResponse

Supplier

## Example Usage

```typescript
import { GetSupplierResponse } from "@apideck/unify/models/components";

let value: GetSupplierResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "suppliers",
  operation: "one",
  data: {
    id: "12345",
    downstreamId: "12345",
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
      code: "N-T",
      name: "GST on Purchases",
      rate: 10,
    },
    taxNumber: "US123945459",
    currency: "USD",
    account: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
    },
    status: "active",
    paymentMethod: "cash",
    channel: "email",
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: true,
      },
    ],
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | HTTP Response Status Code                                  | 200                                                        |
| `status`                                                   | *string*                                                   | :heavy_check_mark:                                         | HTTP Response Status                                       | OK                                                         |
| `service`                                                  | *string*                                                   | :heavy_check_mark:                                         | Apideck ID of service provider                             | xero                                                       |
| `resource`                                                 | *string*                                                   | :heavy_check_mark:                                         | Unified API resource name                                  | suppliers                                                  |
| `operation`                                                | *string*                                                   | :heavy_check_mark:                                         | Operation performed                                        | one                                                        |
| `data`                                                     | [components.Supplier](../../models/components/supplier.md) | :heavy_check_mark:                                         | N/A                                                        |                                                            |