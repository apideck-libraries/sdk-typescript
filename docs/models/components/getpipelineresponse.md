# GetPipelineResponse

Pipeline

## Example Usage

```typescript
import { GetPipelineResponse } from "@apideck/unify/models/components";

let value: GetPipelineResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "pipelines",
  operation: "one",
  data: {
    id: "default",
    name: "Sales Pipeline",
    currency: "USD",
    archived: false,
    active: false,
    displayOrder: 1,
    winProbabilityEnabled: true,
    stages: [
      {
        id: "contractsent",
        name: "Contract Sent",
        value: "CONTRACT_SENT",
        winProbability: 50,
        displayOrder: 1,
      },
    ],
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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | zoho-crm                                                                |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | pipelines                                                               |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.Pipeline](../../models/components/pipeline.md)              | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |