# AtsApplicantsUpdateRequest

## Example Usage

```typescript
import { AtsApplicantsUpdateRequest } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AtsApplicantsUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  applicant: {
    name: "Elon Musk",
    salutation: "Mr",
    firstName: "Elon",
    lastName: "Musk",
    middleName: "D.",
    initials: "EM",
    birthday: new RFCDate("2000-08-12"),
    gender: "male",
    socialSecurityNumber: "123456789",
    type: "Candidate",
    coverLetter:
      "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
    photoUrl: "https://unavatar.io/elon-musk",
    headline: "PepsiCo, Inc, Central Perk",
    title: "CEO",
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
    websites: [
      {
        id: "12345",
        url: "http://example.com",
        type: "primary",
      },
    ],
    socialLinks: [
      {
        id: "12345",
        url: "https://www.twitter.com/apideck",
        type: "twitter",
      },
    ],
    stageId: "12345",
    recruiterId: "12345",
    coordinatorId: "12345",
    applicationIds: [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6",
    ],
    followers: [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6",
    ],
    sources: [
      "Job site",
    ],
    confidential: false,
    anonymized: true,
    tags: [
      "New",
    ],
    archived: false,
    ownerId: "54321",
    recordUrl: "https://app.intercom.io/contacts/12345",
    deleted: true,
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
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `applicant`                                                                                                                                   | [components.ApplicantInput](../../models/components/applicantinput.md)                                                                        | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |