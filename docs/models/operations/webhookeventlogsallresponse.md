# WebhookEventLogsAllResponse

## Example Usage

```typescript
import { WebhookEventLogsAllResponse } from "apideck/models/operations";

let value: WebhookEventLogsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getWebhookEventLogsResponse: {
    statusCode: 200,
    status: "OK",
    data: [
      {
        id: "1d174c4d-fe9e-4377-a76c-6da22fe9cd87",
        statusCode: 200,
        success: true,
        applicationId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
        consumerId: "test_consumer_id",
        unifiedApi: "crm",
        service: {
          id: "101-data-solution",
          name: "101 Data Solution",
        },
        endpoint: "https://example.com/my/webhook/endpoint",
        eventType: "vault.connection.updated",
        executionAttempt: 3,
        httpMethod: "GET",
        timestamp: "2021-07-12T14:26:17.420Z",
        entityType: "Connection",
        requestBody:
          "{\"entity\":{\"id\":\"2222+test_user_id\",\"application_id\":\"2222\",\"consumer_id\":\"test_user_id\",\"name\":\"ActiveCampaign\",\"icon\":\"https://res.cloudinary.com/apideck/image/upload/v1529455970/catalog/activecampaign/icon128x128.png\",\"logo\":\"https://www.activecampaign.com/site/assets/social-2x.png\",\"unified_api\":\"crm\",\"service_id\":\"activecampaign\",\"auth_type\":\"apiKey\",\"enabled\":true,\"tag_line\":\"Integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation.\",\"website\":\"https://www.activecampaign.com/\",\"settings\":{\"instance_url\":\"https://eu28.salesforce.com\",\"base_url\":\"https://updated.api-us1.com\"},\"metadata\":{\"plan\":\"enterprise\",\"account\":{\"name\":\"My Company\"}},\"state\":\"callable\",\"created_at\":\"2021-09-10T10:39:49.628Z\",\"updated_at\":\"2021-09-10T10:39:52.715Z\"},\"entityType\":\"Connection\"}",
        responseBody: "{\"status\":\"OK\"}",
        retryScheduled: true,
        attempts: [
          {
            timestamp: "2021-07-12T14:26:17.420Z",
            executionAttempt: 3,
            statusCode: 200,
            success: true,
          },
        ],
      },
    ],
    meta: {
      itemsOnPage: 50,
      cursors: {
        previous: "em9oby1jcm06OnBhZ2U6OjE=",
        current: "em9oby1jcm06OnBhZ2U6OjI=",
        next: "em9oby1jcm06OnBhZ2U6OjM=",
      },
    },
    links: {
      previous:
        "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
      current: "https://unify.apideck.com/crm/companies",
      next:
        "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `getWebhookEventLogsResponse`                                                                    | [components.GetWebhookEventLogsResponse](../../models/components/getwebhookeventlogsresponse.md) | :heavy_minus_sign:                                                                               | EventLogs                                                                                        |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |