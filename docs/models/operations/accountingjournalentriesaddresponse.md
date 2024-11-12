# AccountingJournalEntriesAddResponse


## Supported Types

### `components.CreateJournalEntryResponse`

```typescript
const value: components.CreateJournalEntryResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "journal-entries",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

