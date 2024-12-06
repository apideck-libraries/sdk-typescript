# GetJobResponse

Jobs

## Example Usage

```typescript
import { GetJobResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetJobResponse = {
  statusCode: 200,
  status: "OK",
  service: "lever",
  resource: "Jobs",
  operation: "one",
  data: {
    id: "12345",
    slug: "ceo",
    title: "CEO",
    sequence: 3,
    visibility: "internal",
    status: "completed",
    code: "123-OC",
    language: "EN",
    employmentTerms: "full-time",
    experience: "Director/ Vice President",
    location: "San Francisco",
    remote: true,
    requisitionId: "abc123",
    department: {
      id: "12345",
      parentId: "22345",
      name: "R&D",
      code: "2",
      description: "R&D",
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
    branch: {
      id: "123",
      name: "HQ NY",
    },
    recruiters: [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
    ],
    hiringManagers: [
      "123456",
    ],
    followers: [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6",
    ],
    description: "A description",
    blocks: [
      {
        title: "string",
        content: "string",
      },
    ],
    closing: "The closing section of the job description",
    closingDate: new RFCDate("2020-10-30"),
    salary: {
      min: 8000,
      max: 10000,
      currency: "USD",
      interval: "year",
    },
    links: [
      {
        type: "job_portal",
        url: "https://app.intercom.io/contacts/12345",
      },
    ],
    confidential: false,
    availableToEmployees: false,
    tags: [
      "New",
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
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: true,
      },
    ],
    deleted: true,
    ownerId: "54321",
    publishedAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `statusCode`                                     | *number*                                         | :heavy_check_mark:                               | HTTP Response Status Code                        | 200                                              |
| `status`                                         | *string*                                         | :heavy_check_mark:                               | HTTP Response Status                             | OK                                               |
| `service`                                        | *string*                                         | :heavy_check_mark:                               | Apideck ID of service provider                   | lever                                            |
| `resource`                                       | *string*                                         | :heavy_check_mark:                               | Unified API resource name                        | Jobs                                             |
| `operation`                                      | *string*                                         | :heavy_check_mark:                               | Operation performed                              | one                                              |
| `data`                                           | [components.Job](../../models/components/job.md) | :heavy_check_mark:                               | N/A                                              |                                                  |