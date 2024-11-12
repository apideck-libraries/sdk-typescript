# HrisTimeOffRequestsAddRequest

## Example Usage

```typescript
import { HrisTimeOffRequestsAddRequest } from "apideck/models/operations";

let value: HrisTimeOffRequestsAddRequest = {
  serviceId: "salesforce",
  timeOffRequest: {
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `timeOffRequest`                                                                                                                              | [components.TimeOffRequestInput](../../models/components/timeoffrequestinput.md)                                                              | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |