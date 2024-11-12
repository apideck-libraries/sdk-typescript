# VaultConsumersDeleteResponse


## Supported Types

### `components.DeleteConsumerResponse`

```typescript
const value: components.DeleteConsumerResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    consumerId: "test_consumer_id",
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

