# PosOrderTypesAddResponse


## Supported Types

### `components.CreateOrderTypeResponse`

```typescript
const value: components.CreateOrderTypeResponse = {
  statusCode: 200,
  status: "OK",
  service: "clover",
  resource: "OrderTypes",
  operation: "add",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

