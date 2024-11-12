# CrmUsersDeleteResponse


## Supported Types

### `components.DeleteUserResponse`

```typescript
const value: components.DeleteUserResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "users",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

