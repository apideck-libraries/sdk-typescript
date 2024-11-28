# ConnectorConnectorResourcesOneResponse

## Example Usage

```typescript
import { ConnectorConnectorResourcesOneResponse } from "@apideck/unify/models/operations";

let value: ConnectorConnectorResourcesOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getConnectorResourceResponse: {
    statusCode: 200,
    status: "OK",
    data: {
      id: "companies",
      name: "Companies",
      downstreamId: "accounts",
      downstreamName: "Accounts",
      pagination: {
        mode: "native",
      },
      supportedOperations: [
        "all",
        "one",
        "add",
        "update",
        "delete",
      ],
      downstreamUnsupportedOperations: [
        "upload",
      ],
      supportedFilters: [
        "name",
        "email",
      ],
      supportedSortBy: [
        "updated_at",
        "created_at",
        "name",
      ],
      supportedFields: [],
      supportedListFields: [],
    },
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `getConnectorResourceResponse`                                                                     | [components.GetConnectorResourceResponse](../../models/components/getconnectorresourceresponse.md) | :heavy_minus_sign:                                                                                 | ConnectorResources                                                                                 |
| `unexpectedErrorResponse`                                                                          | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)           | :heavy_minus_sign:                                                                                 | Unexpected error                                                                                   |