# CrmOpportunitiesOneResponse

## Example Usage

```typescript
import { CrmOpportunitiesOneResponse } from "@apideck/sdk/models/operations";
import { RFCDate } from "@apideck/sdk/types";

let value: CrmOpportunitiesOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getOpportunityResponse: {
    statusCode: 200,
    status: "OK",
    service: "zoho-crm",
    resource: "opportunities",
    operation: "one",
    data: {
      id: "12345",
      title: "New Rocket",
      primaryContactId: "12345",
      description:
        "Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.",
      type: "Existing Customer - Upgrade",
      monetaryAmount: 75000,
      currency: "USD",
      winProbability: 40,
      expectedRevenue: 75000,
      closeDate: new RFCDate("2020-10-30"),
      lossReasonId: "12345",
      lossReason: "No budget",
      wonReasonId: "12345",
      wonReason: "Best pitch",
      pipelineId: "12345",
      pipelineStageId: "12345",
      sourceId: "12345",
      leadId: "12345",
      leadSource: "Website",
      contactId: "12345",
      contactIds: [
        "12345",
      ],
      companyId: "12345",
      companyName: "Copper",
      ownerId: "12345",
      priority: "None",
      status: "Open",
      statusId: "12345",
      tags: [
        "New",
      ],
      interactionCount: 0,
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            {},
          ],
        },
      ],
      stageLastChangedAt: new Date("2020-09-30T07:43:32.000Z"),
      lastActivityAt: "2020-09-30T07:43:32.000Z",
      deleted: false,
      dateStageChanged: new Date("2020-09-30T00:00:00.000Z"),
      dateLastContacted: new Date("2020-09-30T00:00:00.000Z"),
      dateLeadCreated: new Date("2020-09-30T00:00:00.000Z"),
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getOpportunityResponse`                                                                 | [components.GetOpportunityResponse](../../models/components/getopportunityresponse.md)   | :heavy_minus_sign:                                                                       | Opportunity                                                                              |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |