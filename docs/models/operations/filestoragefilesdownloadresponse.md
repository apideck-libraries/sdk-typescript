# FileStorageFilesDownloadResponse


## Supported Types

### `ReadableStream<Uint8Array>`

```typescript
const value: ReadableStream<Uint8Array> = await openAsBlob("example.file");
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

