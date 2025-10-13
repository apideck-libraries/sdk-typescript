# Lead

## Example Usage

```typescript
import { Lead } from "@apideck/unify/models/components";

let value: Lead = {
  id: "12345",
  name: "Elon Musk",
  companyName: "Spacex",
  ownerId: "54321",
  ownerName: "John Doe",
  companyId: "2",
  leadId: "2",
  leadSource: "Cold Call",
  firstName: "Elon",
  lastName: "Musk",
  description: "A thinker",
  prefix: "Sir",
  title: "CEO",
  language: "EN",
  status: "New",
  monetaryAmount: 75000,
  currency: "USD",
  fax: "+12129876543",
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
      line5: "Attention: Finance Dept",
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
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
  tags: [
    "New",
  ],
  updatedAt: "2020-09-30T07:43:32.000Z",
  createdAt: "2020-09-30T07:43:32.000Z",
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
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Unique identifier for the contact.                                                                                                                      | 12345                                                                                                                                                   |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Full name of the lead.                                                                                                                                  | Elon Musk                                                                                                                                               |
| `companyName`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the company the lead is associated with.                                                                                                    | Spacex                                                                                                                                                  |
| `ownerId`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The owner of the lead.                                                                                                                                  | 54321                                                                                                                                                   |
| `ownerName`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the owner of the lead.                                                                                                                      | John Doe                                                                                                                                                |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company the lead is associated with.                                                                                                                | 2                                                                                                                                                       |
| `leadId`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The identifier of the lead.                                                                                                                             | 2                                                                                                                                                       |
| `leadSource`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The source of the lead.                                                                                                                                 | Cold Call                                                                                                                                               |
| `firstName`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The first name of the lead.                                                                                                                             | Elon                                                                                                                                                    |
| `lastName`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The last name of the lead.                                                                                                                              | Musk                                                                                                                                                    |
| `description`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The description of the lead.                                                                                                                            | A thinker                                                                                                                                               |
| `prefix`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The prefix of the lead.                                                                                                                                 | Sir                                                                                                                                                     |
| `title`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The job title of the lead.                                                                                                                              | CEO                                                                                                                                                     |
| `language`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | language code according to ISO 639-1. For the United States - EN                                                                                        | EN                                                                                                                                                      |
| `status`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | New                                                                                                                                                     |
| `monetaryAmount`                                                                                                                                        | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The monetary amount of the lead.                                                                                                                        | 75000                                                                                                                                                   |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `fax`                                                                                                                                                   | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The fax number of the lead.                                                                                                                             | +12129876543                                                                                                                                            |
| `websites`                                                                                                                                              | [components.Website](../../models/components/website.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `addresses`                                                                                                                                             | [components.Address](../../models/components/address.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `socialLinks`                                                                                                                                           | [components.SocialLink](../../models/components/sociallink.md)[]                                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `phoneNumbers`                                                                                                                                          | [components.PhoneNumber](../../models/components/phonenumber.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `emails`                                                                                                                                                | [components.Email](../../models/components/email.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `tags`                                                                                                                                                  | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | [<br/>"New"<br/>]                                                                                                                                       |
| `customMappings`                                                                                                                                        | Record<string, *any*>                                                                                                                                   | :heavy_minus_sign:                                                                                                                                      | When custom mappings are configured on the resource, the result is included here.                                                                       |                                                                                                                                                         |
| `updatedAt`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Date updated in ISO 8601 format                                                                                                                         | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Date created in ISO 8601 format                                                                                                                         | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |