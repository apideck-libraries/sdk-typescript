# AccountingCustomersDeleteResponse


## Supported Types

### `components.DeleteCustomerResponse`

```typescript
const value: components.DeleteCustomerResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "customers",
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

