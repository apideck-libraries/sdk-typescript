# IssueTrackingCollectionUsersOneResponse

## Example Usage

```typescript
import { IssueTrackingCollectionUsersOneResponse } from "@apideck/unify/models/operations";

let value: IssueTrackingCollectionUsersOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCollectionUserResponse: {
    statusCode: 200,
    status: "OK",
    service: "jira",
    resource: "Tickets",
    operation: "one",
    data: {
      id: "12345",
      name: "Elon Musk",
      firstName: "Elon",
      lastName: "Musk",
      email: "elon@musk.com",
      photoUrl: "https://unavatar.io/elon-musk",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getCollectionUserResponse`                                                                  | [components.GetCollectionUserResponse](../../models/components/getcollectionuserresponse.md) | :heavy_minus_sign:                                                                           | User                                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |