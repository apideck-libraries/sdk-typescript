# CrmActivitiesUpdateRequest

## Example Usage

```typescript
import { CrmActivitiesUpdateRequest } from "@apideck/unify/models/operations";

let value: CrmActivitiesUpdateRequest = {
  id: "<id>",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  serviceId: "salesforce",
  activity: {
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
        value: {},
      },
    ],
    attendees: [
      {
        name: "Elon Musk",
        firstName: "Elon",
        middleName: "D.",
        lastName: "Musk",
        prefix: "Mr.",
        suffix: "PhD",
        emailAddress: "elon@musk.com",
        isOrganizer: true,
        status: "accepted",
      },
    ],
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
| `activity`                                                                                                                                    | [components.ActivityInput](../../models/components/activityinput.md)                                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |