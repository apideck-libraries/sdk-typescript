# AtsApplicationsUpdateResponse


## Supported Types

### `components.UpdateApplicationResponse`

```typescript
const value: components.UpdateApplicationResponse = {
  statusCode: 200,
  status: "OK",
  service: "sap-successfactors",
  resource: "Applications",
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

