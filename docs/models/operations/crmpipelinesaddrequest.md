# CrmPipelinesAddRequest

## Example Usage

```typescript
import { CrmPipelinesAddRequest } from "@apideck/unify/models/operations";

let value: CrmPipelinesAddRequest = {
  serviceId: "salesforce",
  pipeline: {
    id: "default",
    name: "Sales Pipeline",
    currency: "USD",
    archived: false,
    active: false,
    displayOrder: 1,
    winProbabilityEnabled: true,
    stages: [
      {
        name: "Contract Sent",
        value: "CONTRACT_SENT",
        winProbability: 50,
        displayOrder: 1,
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
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `pipeline`                                                                                                                                    | [components.PipelineInput](../../models/components/pipelineinput.md)                                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |