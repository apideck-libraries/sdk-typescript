# AccountingExpensesDeleteResponse


## Supported Types

### `components.DeleteExpenseResponse`

```typescript
const value: components.DeleteExpenseResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "Expenses",
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

