# PosModifiersDeleteResponse


## Supported Types

### `components.DeleteModifierResponse`

```typescript
const value: components.DeleteModifierResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Modifiers",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

