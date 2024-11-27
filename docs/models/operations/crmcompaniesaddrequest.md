# CrmCompaniesAddRequest

## Example Usage

```typescript
import { CrmCompaniesAddRequest } from "@apideck/sdk/models/operations";
import { RFCDate } from "@apideck/sdk/types";

let value: CrmCompaniesAddRequest = {
  serviceId: "salesforce",
  company: {
    name: "SpaceX",
    ownerId: "12345",
    image: "https://www.spacex.com/static/images/share.jpg",
    description:
      "Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.",
    vatNumber: "BE0689615164",
    currency: "USD",
    status: "Open",
    fax: "+12129876543",
    annualRevenue: "+$35m",
    numberOfEmployees: "500-1000",
    industry: "Apparel",
    ownership: "Public",
    salesTaxNumber: "12456EN",
    payeeNumber: "78932EN",
    abnOrTfn: "46 115 614 695",
    abnBranch: "123",
    acn: "XXX XXX XXX",
    firstName: "Elon",
    lastName: "Musk",
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
    websites: [
      {
        id: "12345",
        url: "http://example.com",
        type: "primary",
      },
    ],
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
    socialLinks: [
      {
        id: "12345",
        url: "https://www.twitter.com/apideck",
        type: "twitter",
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
    rowType: {
      id: "12345",
      name: "Customer Account",
    },
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: [
          {},
        ],
      },
    ],
    tags: [
      "New",
    ],
    readOnly: false,
    salutation: "Mr",
    birthday: new RFCDate("2000-08-12"),
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `company`                                                                                                                                     | [components.CompanyInput](../../models/components/companyinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |