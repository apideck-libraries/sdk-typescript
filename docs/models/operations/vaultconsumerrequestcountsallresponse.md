# VaultConsumerRequestCountsAllResponse


## Supported Types

### `components.ConsumerRequestCountsInDateRangeResponse`

```typescript
const value: components.ConsumerRequestCountsInDateRangeResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    applicationId: "1111",
    consumerId: "test_user_id",
    startDatetime: "2021-05-01T12:00:00.000Z",
    endDatetime: "2021-05-10T12:00:00.000Z",
    aggregatedRequestCount: 40,
    requestCounts: {
      unify: 100,
      proxy: 10,
      vault: 21,
    },
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

