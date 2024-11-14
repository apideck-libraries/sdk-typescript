# ConnectorApisOneResponse

## Example Usage

```typescript
import { ConnectorApisOneResponse } from "apideck/models/operations";

let value: ConnectorApisOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getApiResponse: {
    statusCode: 200,
    status: "OK",
    data: {
      id: "file-storage",
      name: "File Storage API",
      description:
        "Manage API keys, access tokens, OAuth flows and integrations.",
      specUrl: "https://specs.apideck.com/file-storage.yml",
      apiReferenceUrl:
        "https://developers.apideck.com/apis/file-storage/reference",
      postmanCollectionId: "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
      categories: [
        "files",
        "file-storage",
        "cloud-storage",
        "object-storage",
      ],
      resources: [
        {
          id: "companies",
          name: "Companies",
          excludedFromCoverage: false,
        },
      ],
      events: [
        "crm.contact.updated",
        "accounting.invoice.created",
      ],
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getApiResponse`                                                                         | [components.GetApiResponse](../../models/components/getapiresponse.md)                   | :heavy_minus_sign:                                                                       | Apis                                                                                     |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |