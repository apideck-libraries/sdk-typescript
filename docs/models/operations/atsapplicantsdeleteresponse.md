# AtsApplicantsDeleteResponse


## Supported Types

### `components.DeleteApplicantResponse`

```typescript
const value: components.DeleteApplicantResponse = {
  statusCode: 200,
  status: "OK",
  service: "lever",
  resource: "Applicants",
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

