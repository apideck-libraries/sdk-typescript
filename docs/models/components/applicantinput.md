# ApplicantInput

## Example Usage

```typescript
import { ApplicantInput } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: ApplicantInput = {
  name: "Elon Musk",
  firstName: "Elon",
  lastName: "Musk",
  middleName: "D.",
  initials: "EM",
  birthday: new RFCDate("2000-08-12"),
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
  applications: [
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of an applicant.                                                                                                                               | Elon Musk                                                                                                                                               |
| `firstName`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The first name of the person.                                                                                                                           | Elon                                                                                                                                                    |
| `lastName`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The last name of the person.                                                                                                                            | Musk                                                                                                                                                    |
| `middleName`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Middle name of the person.                                                                                                                              | D.                                                                                                                                                      |
| `initials`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The initials of the person, usually derived from their first, middle, and last names.                                                                   | EM                                                                                                                                                      |
| `birthday`                                                                                                                                              | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | The date of birth of the person.                                                                                                                        | 2000-08-12                                                                                                                                              |
| `coverLetter`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...  |
| `photoUrl`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The URL of the photo of a person.                                                                                                                       | https://unavatar.io/elon-musk                                                                                                                           |
| `headline`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Typically a list of previous companies where the contact has worked or schools that the contact has attended                                            | PepsiCo, Inc, Central Perk                                                                                                                              |
| `title`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The job title of the person.                                                                                                                            | CEO                                                                                                                                                     |
| `emails`                                                                                                                                                | [components.Email](../../models/components/email.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `phoneNumbers`                                                                                                                                          | [components.PhoneNumber](../../models/components/phonenumber.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `addresses`                                                                                                                                             | [components.Address](../../models/components/address.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `websites`                                                                                                                                              | [components.Websites](../../models/components/websites.md)[]                                                                                            | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `socialLinks`                                                                                                                                           | [components.SocialLinks](../../models/components/sociallinks.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `stageId`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 12345                                                                                                                                                   |
| `recruiterId`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 12345                                                                                                                                                   |
| `coordinatorId`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 12345                                                                                                                                                   |
| `applicationIds`                                                                                                                                        | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | [<br/>"a0d636c6-43b3-4bde-8c70-85b707d992f4",<br/>"a98lfd96-43b3-4bde-8c70-85b707d992e6"<br/>]                                                          |
| `applications`                                                                                                                                          | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | [<br/>"a0d636c6-43b3-4bde-8c70-85b707d992f4",<br/>"a98lfd96-43b3-4bde-8c70-85b707d992e6"<br/>]                                                          |
| `followers`                                                                                                                                             | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | [<br/>"a0d636c6-43b3-4bde-8c70-85b707d992f4",<br/>"a98lfd96-43b3-4bde-8c70-85b707d992e6"<br/>]                                                          |
| `sources`                                                                                                                                               | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | [<br/>"Job site"<br/>]                                                                                                                                  |
| `confidential`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | false                                                                                                                                                   |
| `anonymized`                                                                                                                                            | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | true                                                                                                                                                    |
| `tags`                                                                                                                                                  | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | [<br/>"New"<br/>]                                                                                                                                       |
| `archived`                                                                                                                                              | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | false                                                                                                                                                   |
| `ownerId`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 54321                                                                                                                                                   |
| `recordUrl`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | https://app.intercom.io/contacts/12345                                                                                                                  |
| `deleted`                                                                                                                                               | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Flag to indicate if the object is deleted.                                                                                                              | true                                                                                                                                                    |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |