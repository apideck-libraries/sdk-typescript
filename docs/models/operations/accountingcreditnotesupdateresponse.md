# AccountingCreditNotesUpdateResponse


## Supported Types

### `components.UpdateCreditNoteResponse`

```typescript
const value: components.UpdateCreditNoteResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "credit-notes",
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

