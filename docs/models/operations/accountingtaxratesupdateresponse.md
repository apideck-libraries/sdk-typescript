# AccountingTaxRatesUpdateResponse


## Supported Types

### `components.UpdateTaxRateResponse`

```typescript
const value: components.UpdateTaxRateResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "tax-rates",
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

