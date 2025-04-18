# FileStorageUploadSessionsUploadResponse

## Example Usage

```typescript
import { FileStorageUploadSessionsUploadResponse } from "@apideck/unify/models/operations";

let value: FileStorageUploadSessionsUploadResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateUploadSessionResponse: {
    statusCode: 200,
    status: "OK",
    service: "dropbox",
    resource: "UploadSessions",
    operation: "one",
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updateUploadSessionResponse`                                                                    | [components.UpdateUploadSessionResponse](../../models/components/updateuploadsessionresponse.md) | :heavy_minus_sign:                                                                               | UploadSessions                                                                                   |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |