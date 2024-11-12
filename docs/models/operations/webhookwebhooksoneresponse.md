# WebhookWebhooksOneResponse


## Supported Types

### `components.GetWebhookResponse`

```typescript
const value: components.GetWebhookResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "1234",
    description: "A description",
    unifiedApi: "crm",
    status: "enabled",
    disabledReason: "retry_limit",
    deliveryUrl: "https://example.com/my/webhook/endpoint",
    executeBaseUrl: "https://unify.apideck.com/webhook/webhooks/1234/execute",
    events: [
      "vault.connection.created",
      "vault.connection.updated",
    ],
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
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

