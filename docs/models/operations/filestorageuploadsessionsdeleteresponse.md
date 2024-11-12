# FileStorageUploadSessionsDeleteResponse


## Supported Types

### `components.DeleteUploadSessionResponse`

```typescript
const value: components.DeleteUploadSessionResponse = {
  statusCode: 200,
  status: "OK",
  service: "dropbox",
  resource: "UploadSessions",
  operation: "one",
  data: {
    id: "12345",
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

