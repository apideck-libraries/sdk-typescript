# PosModifiersUpdateResponse


## Supported Types

### `components.UpdateModifierResponse`

```typescript
const value: components.UpdateModifierResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Modifiers",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

