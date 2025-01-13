# IssueTrackingCollectionTicketCommentsAddResponse

## Example Usage

```typescript
import { IssueTrackingCollectionTicketCommentsAddResponse } from "@apideck/unify/models/operations";

let value: IssueTrackingCollectionTicketCommentsAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  createCommentResponse: {
    statusCode: 200,
    status: "OK",
    service: "jira",
    resource: "Tickets",
    operation: "add",
    data: {
      id: "12345",
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
| `createCommentResponse`                                                                  | [components.CreateCommentResponse](../../models/components/createcommentresponse.md)     | :heavy_minus_sign:                                                                       | Create a Comment                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |