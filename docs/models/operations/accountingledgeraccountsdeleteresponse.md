# AccountingLedgerAccountsDeleteResponse


## Supported Types

### `components.DeleteLedgerAccountResponse`

```typescript
const value: components.DeleteLedgerAccountResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "ledger-accounts",
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

