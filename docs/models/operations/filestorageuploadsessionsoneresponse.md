# FileStorageUploadSessionsOneResponse

## Example Usage

```typescript
import { FileStorageUploadSessionsOneResponse } from "@apideck/unify/models/operations";

let value: FileStorageUploadSessionsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getUploadSessionResponse: {
    statusCode: 200,
    status: "OK",
    service: "dropbox",
    resource: "UploadSessions",
    operation: "one",
    data: {
      id: "12345",
      success: true,
      partSize: 1000000,
      parallelUploadSupported: true,
      uploadedByteRange: "0-42",
      expiresAt: new Date("2022-09-30T07:43:32.000Z"),
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getUploadSessionResponse`                                                                 | [components.GetUploadSessionResponse](../../models/components/getuploadsessionresponse.md) | :heavy_minus_sign:                                                                         | UploadSessions                                                                             |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |