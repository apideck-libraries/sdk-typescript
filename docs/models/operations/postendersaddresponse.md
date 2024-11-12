# PosTendersAddResponse


## Supported Types

### `components.CreateTenderResponse`

```typescript
const value: components.CreateTenderResponse = {
  statusCode: 200,
  status: "OK",
  service: "clover",
  resource: "Tenders",
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

