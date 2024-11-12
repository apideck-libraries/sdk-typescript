# IssueTrackingCollectionTicketCommentsAddRequest

## Example Usage

```typescript
import { IssueTrackingCollectionTicketCommentsAddRequest } from "apideck/models/operations";

let value: IssueTrackingCollectionTicketCommentsAddRequest = {
  serviceId: "salesforce",
  collectionId: "apideck-io",
  ticketId: "<id>",
  collectionTicketComment: {
    body: "What internet provider do you use?",
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
| `ticketId`                                                                                                                                    | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the ticket you are acting upon.                                                                                                         |                                                                                                                                               |
| `collectionTicketComment`                                                                                                                     | [components.CollectionTicketCommentInput](../../models/components/collectionticketcommentinput.md)                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |