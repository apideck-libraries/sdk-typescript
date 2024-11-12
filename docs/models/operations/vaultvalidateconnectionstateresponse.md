# VaultValidateConnectionStateResponse


## Supported Types

### `components.ValidateConnectionStateResponse`

```typescript
const value: components.ValidateConnectionStateResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "crm+salesforce",
    state: "authorized",
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

