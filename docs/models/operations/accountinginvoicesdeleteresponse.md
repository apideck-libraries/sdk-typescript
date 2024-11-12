# AccountingInvoicesDeleteResponse


## Supported Types

### `components.DeleteInvoiceResponse`

```typescript
const value: components.DeleteInvoiceResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "invoices",
  operation: "delete",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

