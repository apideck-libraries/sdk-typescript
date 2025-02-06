# AtsApplicationsUpdateRequest

## Example Usage

```typescript
import { AtsApplicationsUpdateRequest } from "@apideck/unify/models/operations";

let value: AtsApplicationsUpdateRequest = {
  id: "0b9579ba-14c9-46c5-a61a-8da5d6fd5b47",
  serviceId: "salesforce",
  application: {
    applicantId: "12345",
    jobId: "12345",
    status: "open",
    stage: {
      id: "12345",
      name: "12345",
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
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         | 0b9579ba-14c9-46c5-a61a-8da5d6fd5b47                                                                                                          |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `application`                                                                                                                                 | [components.ApplicationInput](../../models/components/applicationinput.md)                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |