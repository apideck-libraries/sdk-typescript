# FileStorageUploadSessionsFinishResponse

## Example Usage

```typescript
import { FileStorageUploadSessionsFinishResponse } from "@apideck/unify/models/operations";

let value: FileStorageUploadSessionsFinishResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getFileResponse: {
    statusCode: 200,
    status: "OK",
    service: "google-drive",
    resource: "files",
    operation: "one",
    data: {
      id: "12345",
      downstreamId: "12345",
      name: "sample.jpg",
      description: "A sample image",
      type: "file",
      path: "/Documents/sample.jpg",
      mimeType: "image/jpeg",
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
      exportFormats: [
        "application/pdf",
        "application/vnd.oasis.opendocument.presentation",
        "text/plain",
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
| `getFileResponse`                                                                        | [components.GetFileResponse](../../models/components/getfileresponse.md)                 | :heavy_minus_sign:                                                                       | File                                                                                     |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |