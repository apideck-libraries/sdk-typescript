# VaultCreateCallbackStateResponse


## Supported Types

### `components.CreateCallbackStateResponse`

```typescript
const value: components.CreateCallbackStateResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    state: "123e4567-e89b-12d3-a456-426614174000",
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

