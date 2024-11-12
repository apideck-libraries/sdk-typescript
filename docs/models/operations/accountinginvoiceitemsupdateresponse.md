# AccountingInvoiceItemsUpdateResponse


## Supported Types

### `components.UpdateInvoiceItemsResponse`

```typescript
const value: components.UpdateInvoiceItemsResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "invoice-items",
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

