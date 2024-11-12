# VaultCustomFieldsAllResponse


## Supported Types

### `components.GetCustomFieldsResponse`

```typescript
const value: components.GetCustomFieldsResponse = {
  statusCode: 200,
  status: "OK",
  data: [
    {
      id: "123456",
      name: "SSN",
      description: "Employee Level",
      value: "495172776",
    },
  ],
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

