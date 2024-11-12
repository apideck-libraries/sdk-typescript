# AccountingLocationsAddResponse


## Supported Types

### `components.CreateAccountingLocationResponse`

```typescript
const value: components.CreateAccountingLocationResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "locations",
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

