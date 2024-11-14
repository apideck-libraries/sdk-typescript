# Activities
(*crm.activities*)

## Overview

### Available Operations

* [list](#list) - List activities
* [create](#create) - Create activity
* [get](#get) - Get activity
* [update](#update) - Update activity
* [delete](#delete) - Delete activity

## list

List activities

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.activities.list({
    serviceId: "salesforce",
    filter: {
      companyId: "1234",
      ownerId: "1234",
      contactId: "1234",
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      type: "Task",
    },
    sort: {
      by: "created_at",
      direction: "desc",
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { crmActivitiesList } from "apideck/funcs/crmActivitiesList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmActivitiesList(apideck, {
    serviceId: "salesforce",
    filter: {
      companyId: "1234",
      ownerId: "1234",
      contactId: "1234",
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      type: "Task",
    },
    sort: {
      by: "created_at",
      direction: "desc",
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CrmActivitiesAllRequest](../../models/operations/crmactivitiesallrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmActivitiesAllResponse](../../models/operations/crmactivitiesallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## create

Create activity

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.activities.create({
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
          value: true,
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { crmActivitiesCreate } from "apideck/funcs/crmActivitiesCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmActivitiesCreate(apideck, {
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
          value: true,
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CrmActivitiesAddRequest](../../models/operations/crmactivitiesaddrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmActivitiesAddResponse](../../models/operations/crmactivitiesaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## get

Get activity

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.activities.get({
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { crmActivitiesGet } from "apideck/funcs/crmActivitiesGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmActivitiesGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CrmActivitiesOneRequest](../../models/operations/crmactivitiesonerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmActivitiesOneResponse](../../models/operations/crmactivitiesoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## update

Update activity

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.activities.update({
    id: "<id>",
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
          value: "Uses Salesforce and Marketo",
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            "<value>",
            "<value>",
            "<value>",
          ],
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            "<value>",
            "<value>",
          ],
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { crmActivitiesUpdate } from "apideck/funcs/crmActivitiesUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmActivitiesUpdate(apideck, {
    id: "<id>",
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
          value: "Uses Salesforce and Marketo",
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            "<value>",
            "<value>",
            "<value>",
          ],
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            "<value>",
            "<value>",
          ],
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CrmActivitiesUpdateRequest](../../models/operations/crmactivitiesupdaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmActivitiesUpdateResponse](../../models/operations/crmactivitiesupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## delete

Delete activity

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.crm.activities.delete({
    id: "<id>",
    serviceId: "salesforce",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { crmActivitiesDelete } from "apideck/funcs/crmActivitiesDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await crmActivitiesDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CrmActivitiesDeleteRequest](../../models/operations/crmactivitiesdeleterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CrmActivitiesDeleteResponse](../../models/operations/crmactivitiesdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |