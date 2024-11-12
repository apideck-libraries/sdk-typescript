# CrmPipelinesUpdateRequest

## Example Usage

```typescript
import { CrmPipelinesUpdateRequest } from "apideck/models/operations";

let value: CrmPipelinesUpdateRequest = {
  id: "<id>",
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
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `pipeline`                                                                                                                                    | [components.PipelineInput](../../models/components/pipelineinput.md)                                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |