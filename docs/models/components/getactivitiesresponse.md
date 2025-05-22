# GetActivitiesResponse

Activities

## Example Usage

```typescript
import { GetActivitiesResponse } from "@apideck/unify/models/components";

let value: GetActivitiesResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "all",
  data: [
    {
      id: "12345",
      downstreamId: "12345",
      activityDatetime: "2021-05-01T12:00:00.000Z",
      durationSeconds: 1800,
      userId: "12345",
      accountId: "12345",
      contactId: "12345",
      companyId: "12345",
      opportunityId: "12345",
      leadId: "12345",
      ownerId: "12345",
      campaignId: "12345",
      caseId: "12345",
      assetId: "12345",
      contractId: "12345",
      productId: "12345",
      solutionId: "12345",
      customObjectId: "12345",
      type: "meeting",
      title: "Meeting",
      description: "More info about the meeting",
      note: "An internal note about the meeting",
      location: "Space",
      locationAddress: {
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
      allDayEvent: false,
      private: true,
      groupEvent: true,
      eventSubType: "debrief",
      groupEventType: "Proposed",
      child: false,
      archived: false,
      deleted: false,
      showAs: "busy",
      done: false,
      startDatetime: "2021-05-01T12:00:00.000Z",
      endDatetime: "2021-05-01T12:30:00.000Z",
      durationMinutes: 30,
      activityDate: "2021-05-01",
      endDate: "2021-05-01",
      recurrent: false,
      reminderDatetime: "2021-05-01T17:00:00.000Z",
      reminderSet: false,
      videoConferenceUrl: "https://us02web.zoom.us/j/88120759396",
      videoConferenceId: "zoom:88120759396",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: "Uses Salesforce and Marketo",
        },
      ],
      attendees: [
        {
          id: "12345",
          name: "Elon Musk",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          prefix: "Mr.",
          suffix: "PhD",
          emailAddress: "elon@musk.com",
          isOrganizer: true,
          status: "accepted",
          userId: "12345",
          contactId: "12345",
          updatedAt: new Date("2017-08-12T20:43:21.291Z"),
          createdAt: new Date("2017-08-12T20:43:21.291Z"),
        },
      ],
      updatedBy: "12345",
      createdBy: "12345",
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
    },
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | zoho-crm                                                                |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | activities                                                              |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | all                                                                     |
| `data`                                                                  | [components.Activity](../../models/components/activity.md)[]            | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `links`                                                                 | [components.Links](../../models/components/links.md)                    | :heavy_minus_sign:                                                      | Links to navigate to previous or next pages through the API             |                                                                         |