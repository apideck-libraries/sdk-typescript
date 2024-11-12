# PosOrdersUpdateResponse


## Supported Types

### `components.UpdateOrderResponse`

```typescript
const value: components.UpdateOrderResponse = {
  statusCode: 200,
  status: "OK",
  service: "clover",
  resource: "orders",
  operation: "update",
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

