# WebhookEventLogsAllResponse

## Example Usage

```typescript
import { WebhookEventLogsAllResponse } from "@apideck/unify/models/operations";

let value: WebhookEventLogsAllResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `getWebhookEventLogsResponse`                                                                    | [components.GetWebhookEventLogsResponse](../../models/components/getwebhookeventlogsresponse.md) | :heavy_minus_sign:                                                                               | EventLogs                                                                                        |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |