# AccountingInvoicesUpdateResponse


## Supported Types

### `components.UpdateInvoiceResponse`

```typescript
const value: components.UpdateInvoiceResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "invoices",
  operation: "update",
  data: {
    id: "12345",
    downstreamId: "12345",
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

