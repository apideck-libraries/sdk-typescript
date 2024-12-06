# GetOpportunitiesResponse

Opportunities

## Example Usage

```typescript
import { GetOpportunitiesResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetOpportunitiesResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "opportunities",
  operation: "all",
  data: [
    {
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
          value: "Uses Salesforce and Marketo",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | HTTP Response Status Code                                          | 200                                                                |
| `status`                                                           | *string*                                                           | :heavy_check_mark:                                                 | HTTP Response Status                                               | OK                                                                 |
| `service`                                                          | *string*                                                           | :heavy_check_mark:                                                 | Apideck ID of service provider                                     | zoho-crm                                                           |
| `resource`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Unified API resource name                                          | opportunities                                                      |
| `operation`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Operation performed                                                | all                                                                |
| `data`                                                             | [components.Opportunity](../../models/components/opportunity.md)[] | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `meta`                                                             | [components.Meta](../../models/components/meta.md)                 | :heavy_minus_sign:                                                 | Response metadata                                                  |                                                                    |
| `links`                                                            | [components.Links](../../models/components/links.md)               | :heavy_minus_sign:                                                 | Links to navigate to previous or next pages through the API        |                                                                    |