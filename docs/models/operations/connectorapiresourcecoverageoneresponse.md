# ConnectorApiResourceCoverageOneResponse

## Example Usage

```typescript
import { ConnectorApiResourceCoverageOneResponse } from "@apideck/unify/models/operations";

let value: ConnectorApiResourceCoverageOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getApiResourceCoverageResponse: {
    statusCode: 200,
    status: "OK",
    data: {
      id: "companies",
      name: "Companies",
      coverage: [
        {
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
          supportedFilters: [
            "name",
            "email",
          ],
          supportedSortBy: [
            "updated_at",
            "created_at",
            "name",
          ],
          supportedFields: [
            {
              unifiedProperty: "owner_id",
              childProperties: [],
            },
          ],
          supportedListFields: [
            {
              unifiedProperty: "owner_id",
            },
          ],
        },
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `getApiResourceCoverageResponse`                                                                       | [components.GetApiResourceCoverageResponse](../../models/components/getapiresourcecoverageresponse.md) | :heavy_minus_sign:                                                                                     | ApiResources                                                                                           |
| `unexpectedErrorResponse`                                                                              | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)               | :heavy_minus_sign:                                                                                     | Unexpected error                                                                                       |