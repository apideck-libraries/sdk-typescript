# AccountingBillPaymentsAddResponse


## Supported Types

### `components.CreateBillPaymentResponse`

```typescript
const value: components.CreateBillPaymentResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "payments",
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

