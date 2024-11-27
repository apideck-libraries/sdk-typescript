# HrisTimeOffRequestsOneResponse

## Example Usage

```typescript
import { HrisTimeOffRequestsOneResponse } from "@apideck/sdk/models/operations";

let value: HrisTimeOffRequestsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getTimeOffRequestResponse: {
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getTimeOffRequestResponse`                                                                  | [components.GetTimeOffRequestResponse](../../models/components/gettimeoffrequestresponse.md) | :heavy_minus_sign:                                                                           | TimeOffRequests                                                                              |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |