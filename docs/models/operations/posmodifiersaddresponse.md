# PosModifiersAddResponse


## Supported Types

### `components.CreateModifierResponse`

```typescript
const value: components.CreateModifierResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Modifiers",
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

