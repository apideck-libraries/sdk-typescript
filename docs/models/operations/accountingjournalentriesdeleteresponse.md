# AccountingJournalEntriesDeleteResponse


## Supported Types

### `components.DeleteJournalEntryResponse`

```typescript
const value: components.DeleteJournalEntryResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "journal-entries",
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

