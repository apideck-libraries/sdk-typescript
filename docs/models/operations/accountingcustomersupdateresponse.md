# AccountingCustomersUpdateResponse


## Supported Types

### `components.UpdateCustomerResponse`

```typescript
const value: components.UpdateCustomerResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "customers",
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

