# FileStorageFoldersOneResponse

## Example Usage

```typescript
import { FileStorageFoldersOneResponse } from "@apideck/unify/models/operations";

let value: FileStorageFoldersOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getFolderResponse: {
    statusCode: 200,
    status: "OK",
    service: "undefined",
    resource: "Folders",
    operation: "one",
    data: {
      id: "12345",
      name: "Documents",
      description: "My Personal Documents",
      path: "/Personal/Documents",
      size: 1810673,
      owner: {
        id: "12345",
        email: "hello@apideck.com",
        name: "Elon Musk",
      },
      parentFolders: [
        {
          id: "12345",
          name: "Personal",
        },
      ],
      updatedBy: "12345",
      createdBy: "12345",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getFolderResponse`                                                                      | [components.GetFolderResponse](../../models/components/getfolderresponse.md)             | :heavy_minus_sign:                                                                       | Folders                                                                                  |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |