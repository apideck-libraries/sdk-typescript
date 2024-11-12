# FileStorageFoldersDeleteResponse


## Supported Types

### `components.DeleteFolderResponse`

```typescript
const value: components.DeleteFolderResponse = {
  statusCode: 200,
  status: "OK",
  service: "undefined",
  resource: "Folders",
  operation: "delete",
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

