# VaultConnectionCustomMappingsAllResponse


## Supported Types

### `components.GetCustomMappingsResponse`

```typescript
const value: components.GetCustomMappingsResponse = {
  statusCode: 200,
  status: "OK",
  data: [
    {
      id: "hris+employees+first_aid_training",
      label: "First Aid Training",
      description: "First Aid Training completed after 2019-01-01",
      value: "$.root.training.first_aid",
      key: "first_aid_training",
      required: false,
      customField: true,
      consumerId: "test_user_id",
      example: "Some value",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

