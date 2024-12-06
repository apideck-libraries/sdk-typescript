# GetHrisCompanyResponse

Company

## Example Usage

```typescript
import { GetHrisCompanyResponse } from "@apideck/unify/models/components";

let value: GetHrisCompanyResponse = {
  statusCode: 200,
  status: "OK",
  service: "undefined",
  resource: "Companies",
  operation: "one",
  data: {
    id: "12345",
    legalName: "SpaceX",
    displayName: "SpaceX",
    subdomain: "company",
    status: "active",
    companyNumber: "123456-AB",
    currency: "USD",
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
    debtorId: "12345",
    deleted: false,
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | HTTP Response Status Code                                        | 200                                                              |
| `status`                                                         | *string*                                                         | :heavy_check_mark:                                               | HTTP Response Status                                             | OK                                                               |
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Apideck ID of service provider                                   | undefined                                                        |
| `resource`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unified API resource name                                        | Companies                                                        |
| `operation`                                                      | *string*                                                         | :heavy_check_mark:                                               | Operation performed                                              | one                                                              |
| `data`                                                           | [components.HrisCompany](../../models/components/hriscompany.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |