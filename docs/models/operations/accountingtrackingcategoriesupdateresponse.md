# AccountingTrackingCategoriesUpdateResponse


## Supported Types

### `components.UpdateTrackingCategoryResponse`

```typescript
const value: components.UpdateTrackingCategoryResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "tracking-categories",
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

