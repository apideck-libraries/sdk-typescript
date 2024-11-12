# CrmNotesDeleteResponse


## Supported Types

### `components.DeleteNoteResponse`

```typescript
const value: components.DeleteNoteResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "notes",
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

