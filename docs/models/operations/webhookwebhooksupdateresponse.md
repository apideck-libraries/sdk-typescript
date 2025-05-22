# WebhookWebhooksUpdateResponse

## Example Usage

```typescript
import { WebhookWebhooksUpdateResponse } from "@apideck/unify/models/operations";

let value: WebhookWebhooksUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateWebhookResponse: {
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateWebhookResponse`                                                                  | [components.UpdateWebhookResponse](../../models/components/updatewebhookresponse.md)     | :heavy_minus_sign:                                                                       | Webhooks                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |