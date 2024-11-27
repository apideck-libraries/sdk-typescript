# IssueTrackingCollectionsOneResponse

## Example Usage

```typescript
import { IssueTrackingCollectionsOneResponse } from "@apideck/sdk/models/operations";

let value: IssueTrackingCollectionsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCollectionResponse: {
    statusCode: 200,
    status: "OK",
    service: "jira",
    resource: "Tickets",
    operation: "one",
    data: {
      id: "12345",
      parentId: "12345",
      type: "Technical",
      name: "Main IT Issues",
      description: "IT Issues",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `getCollectionResponse`                                                                  | [components.GetCollectionResponse](../../models/components/getcollectionresponse.md)     | :heavy_minus_sign:                                                                       | Get a Collection                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |