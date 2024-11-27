# GetTimeOffRequestsResponse

TimeOffRequests

## Example Usage

```typescript
import { GetTimeOffRequestsResponse } from "@apideck/sdk/models/components";

let value: GetTimeOffRequestsResponse = {
  statusCode: 200,
  status: "OK",
  service: "bamboohr",
  resource: "time-off-requests",
  operation: "all",
  data: [
    {
      id: "12345",
      employeeId: "12345",
      policyId: "12345",
      status: "approved",
      description: "Enjoying some sun.",
      startDate: "2022-04-01",
      endDate: "2022-04-01",
      requestDate: "2022-03-21",
      requestType: "vacation",
      approvalDate: "2022-03-21",
      units: "hours",
      amount: 3.5,
      dayPart: "morning",
      notes: {
        employee: "Relaxing on the beach for a few hours.",
        manager: "Enjoy!",
      },
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
      policyType: "sick",
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status Code                                                | 200                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status                                                     | OK                                                                       |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Apideck ID of service provider                                           | bamboohr                                                                 |
| `resource`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Unified API resource name                                                | time-off-requests                                                        |
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Operation performed                                                      | all                                                                      |
| `data`                                                                   | [components.TimeOffRequest](../../models/components/timeoffrequest.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `meta`                                                                   | [components.Meta](../../models/components/meta.md)                       | :heavy_minus_sign:                                                       | Response metadata                                                        |                                                                          |
| `links`                                                                  | [components.Links](../../models/components/links.md)                     | :heavy_minus_sign:                                                       | Links to navigate to previous or next pages through the API              |                                                                          |