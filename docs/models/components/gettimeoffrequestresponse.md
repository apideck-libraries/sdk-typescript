# GetTimeOffRequestResponse

TimeOffRequests

## Example Usage

```typescript
import { GetTimeOffRequestResponse } from "@apideck/unify/models/components";

let value: GetTimeOffRequestResponse = {
  statusCode: 200,
  status: "OK",
  service: "bamboohr",
  resource: "time-off-requests",
  operation: "one",
  data: {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP Response Status Code                                              | 200                                                                    |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | HTTP Response Status                                                   | OK                                                                     |
| `service`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Apideck ID of service provider                                         | bamboohr                                                               |
| `resource`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Unified API resource name                                              | time-off-requests                                                      |
| `operation`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Operation performed                                                    | one                                                                    |
| `data`                                                                 | [components.TimeOffRequest](../../models/components/timeoffrequest.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |