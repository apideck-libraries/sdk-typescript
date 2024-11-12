# PosLocationsAddResponse


## Supported Types

### `components.CreateLocationResponse`

```typescript
const value: components.CreateLocationResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Locations",
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

