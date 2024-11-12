# HrisDepartmentsUpdateResponse


## Supported Types

### `components.UpdateDepartmentResponse`

```typescript
const value: components.UpdateDepartmentResponse = {
  statusCode: 200,
  status: "OK",
  service: "workday",
  resource: "Departments",
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

