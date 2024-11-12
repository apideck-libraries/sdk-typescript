# CrmPipelinesUpdateResponse


## Supported Types

### `components.UpdatePipelineResponse`

```typescript
const value: components.UpdatePipelineResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "pipelines",
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

