# FileStorageUploadSessionsOneResponse


## Supported Types

### `components.GetUploadSessionResponse`

```typescript
const value: components.GetUploadSessionResponse = {
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
};
```

### `components.UnexpectedErrorResponse`

```typescript
const value: components.UnexpectedErrorResponse = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

