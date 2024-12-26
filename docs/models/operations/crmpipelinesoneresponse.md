# CrmPipelinesOneResponse

## Example Usage

```typescript
import { CrmPipelinesOneResponse } from "@apideck/unify/models/operations";

let value: CrmPipelinesOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getPipelineResponse: {
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getPipelineResponse`                                                                    | [components.GetPipelineResponse](../../models/components/getpipelineresponse.md)         | :heavy_minus_sign:                                                                       | Pipeline                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |