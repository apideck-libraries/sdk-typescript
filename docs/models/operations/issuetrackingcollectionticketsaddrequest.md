# IssueTrackingCollectionTicketsAddRequest

## Example Usage

```typescript
import { IssueTrackingCollectionTicketsAddRequest } from "@apideck/sdk/models/operations";

let value: IssueTrackingCollectionTicketsAddRequest = {
  serviceId: "salesforce",
  collectionId: "apideck-io",
  ticket: {
    parentId: "12345",
    type: "Technical",
    subject: "Technical Support Request",
    description: "I am facing issues with my internet connection",
    status: "open",
    priority: "high",
    assignees: [
      {
        id: "12345",
      },
    ],
    dueDate: new Date("2020-09-30T07:43:32.000Z"),
    tags: [
      {
        id: "12345",
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
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `collectionId`                                                                                                                                | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The collection ID                                                                                                                             | apideck-io                                                                                                                                    |
| `ticket`                                                                                                                                      | [components.TicketInput](../../models/components/ticketinput.md)                                                                              | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |