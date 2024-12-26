# AtsApplicantsOneResponse

## Example Usage

```typescript
import { AtsApplicantsOneResponse } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AtsApplicantsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getApplicantResponse: {
    statusCode: 200,
    status: "OK",
    service: "lever",
    resource: "Applicants",
    operation: "one",
    data: {
      id: "12345",
      name: "Elon Musk",
      firstName: "Elon",
      lastName: "Musk",
      middleName: "D.",
      initials: "EM",
      birthday: new RFCDate("2000-08-12"),
      coverLetter:
        "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
      jobUrl: "https://democompany.recruitee.com/o/example-talent-pool",
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
          value: true,
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
      sourceId: "12345",
      confidential: false,
      anonymized: true,
      tags: [
        "New",
      ],
      archived: false,
      lastInteractionAt: new Date("2020-09-30T07:43:32.000Z"),
      ownerId: "54321",
      sourcedBy: "12345",
      cvUrl:
        "https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f",
      recordUrl: "https://app.intercom.io/contacts/12345",
      rejectedAt: new Date("2020-09-30T07:43:32.000Z"),
      deleted: true,
      deletedBy: "12345",
      deletedAt: new Date("2020-09-30T07:43:32.000Z"),
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getApplicantResponse`                                                                   | [components.GetApplicantResponse](../../models/components/getapplicantresponse.md)       | :heavy_minus_sign:                                                                       | Applicants                                                                               |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |