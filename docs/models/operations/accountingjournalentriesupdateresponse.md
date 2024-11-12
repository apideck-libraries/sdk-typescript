# AccountingJournalEntriesUpdateResponse


## Supported Types

### `components.UpdateJournalEntryResponse`

```typescript
const value: components.UpdateJournalEntryResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "journal-entries",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

