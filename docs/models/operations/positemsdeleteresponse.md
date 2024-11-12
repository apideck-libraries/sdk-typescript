# PosItemsDeleteResponse


## Supported Types

### `components.DeleteItemResponse`

```typescript
const value: components.DeleteItemResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Items",
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

