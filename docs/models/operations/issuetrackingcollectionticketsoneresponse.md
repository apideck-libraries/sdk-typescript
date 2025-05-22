# IssueTrackingCollectionTicketsOneResponse

## Example Usage

```typescript
import { IssueTrackingCollectionTicketsOneResponse } from "@apideck/unify/models/operations";

let value: IssueTrackingCollectionTicketsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getTicketResponse: {
    statusCode: 200,
    status: "OK",
    service: "sage-hr",
    resource: "Tickets",
    operation: "one",
    data: {
      id: "12345",
      parentId: "12345",
      collectionId: "12345",
      type: "Technical",
      subject: "Technical Support Request",
      description: "I am facing issues with my internet connection",
      status: "open",
      priority: "high",
      assignees: [
        {
          id: "12345",
          username: "Cocoa",
        },
      ],
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      createdBy: "12345",
      dueDate: new Date("2020-09-30T07:43:32.000Z"),
      completedAt: new Date("2020-09-30T07:43:32.000Z"),
      tags: [
        {
          id: "12345",
          name: "User Experience",
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
| `getTicketResponse`                                                                      | [components.GetTicketResponse](../../models/components/getticketresponse.md)             | :heavy_minus_sign:                                                                       | Get a Ticket                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |