# CompanyInfo

## Example Usage

```typescript
import { CompanyInfo } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: CompanyInfo = {
  id: "12345",
  companyName: "SpaceX",
  status: "active",
  legalName: "SpaceX Inc.",
  country: "US",
  salesTaxNumber: "111.222.333",
  defaultSalesTax: {
    id: "1234",
    name: "GST on Purchases",
    code: "ABN",
    description: "Reduced rate GST Purchases",
    effectiveTaxRate: 10,
    totalTaxRate: 10,
    taxPayableAccountId: "123456",
    taxRemittedAccountId: "123456",
    components: [
      {
        id: "10",
        name: "GST",
        rate: 10,
        compound: true,
      },
    ],
    type: "NONE",
    reportTaxType: "NONE",
    originalTaxRateId: "12345",
    status: "active",
    rowVersion: "1-12345",
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
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
  },
  currency: "USD",
  language: "EN",
  fiscalYearStartMonth: "January",
  companyStartDate: new RFCDate("2015-06-05"),
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
  rowVersion: "1-12345",
  updatedBy: "12345",
  createdBy: "12345",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | A unique identifier for an object.                                                                                                         | 12345                                                                                                                                      |
| `companyName`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The name of the company.                                                                                                                   | SpaceX                                                                                                                                     |
| `status`                                                                                                                                   | [components.CompanyStatus](../../models/components/companystatus.md)                                                                       | :heavy_minus_sign:                                                                                                                         | Based on the status some functionality is enabled or disabled.                                                                             | active                                                                                                                                     |
| `legalName`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The legal name of the company                                                                                                              | SpaceX Inc.                                                                                                                                |
| `country`                                                                                                                                  | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | country code according to ISO 3166-1 alpha-2.                                                                                              | US                                                                                                                                         |
| `salesTaxNumber`                                                                                                                           | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        | 111.222.333                                                                                                                                |
| `automatedSalesTax`                                                                                                                        | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | Whether sales tax is calculated automatically for the company                                                                              |                                                                                                                                            |
| `salesTaxEnabled`                                                                                                                          | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | Whether sales tax is enabled for the company                                                                                               |                                                                                                                                            |
| `defaultSalesTax`                                                                                                                          | [components.TaxRate](../../models/components/taxrate.md)                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `currency`                                                                                                                                 | [components.Currency](../../models/components/currency.md)                                                                                 | :heavy_minus_sign:                                                                                                                         | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).         | USD                                                                                                                                        |
| `language`                                                                                                                                 | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | language code according to ISO 639-1. For the United States - EN                                                                           | EN                                                                                                                                         |
| `fiscalYearStartMonth`                                                                                                                     | [components.TheStartMonthOfFiscalYear](../../models/components/thestartmonthoffiscalyear.md)                                               | :heavy_minus_sign:                                                                                                                         | The start month of fiscal year.                                                                                                            | January                                                                                                                                    |
| `companyStartDate`                                                                                                                         | [RFCDate](../../types/rfcdate.md)                                                                                                          | :heavy_minus_sign:                                                                                                                         | Date when company file was created                                                                                                         | 2015-06-05                                                                                                                                 |
| `addresses`                                                                                                                                | [components.Address](../../models/components/address.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `phoneNumbers`                                                                                                                             | [components.PhoneNumber](../../models/components/phonenumber.md)[]                                                                         | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `emails`                                                                                                                                   | [components.Email](../../models/components/email.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `customMappings`                                                                                                                           | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | When custom mappings are configured on the resource, the result is included here.                                                          |                                                                                                                                            |
| `rowVersion`                                                                                                                               | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | 1-12345                                                                                                                                    |
| `updatedBy`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The user who last updated the object.                                                                                                      | 12345                                                                                                                                      |
| `createdBy`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The user who created the object.                                                                                                           | 12345                                                                                                                                      |
| `updatedAt`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_minus_sign:                                                                                                                         | The date and time when the object was last updated.                                                                                        | 2020-09-30T07:43:32.000Z                                                                                                                   |
| `createdAt`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_minus_sign:                                                                                                                         | The date and time when the object was created.                                                                                             | 2020-09-30T07:43:32.000Z                                                                                                                   |