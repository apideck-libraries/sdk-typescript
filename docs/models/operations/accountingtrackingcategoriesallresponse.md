# AccountingTrackingCategoriesAllResponse

## Example Usage

```typescript
import { AccountingTrackingCategoriesAllResponse } from "@apideck/sdk/models/operations";

let value: AccountingTrackingCategoriesAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getTrackingCategoriesResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "tracking-categories",
    operation: "all",
    data: [
      {
        id: "12345",
        parentId: "12345",
        name: "Department",
        code: "100",
        status: "active",
        rowVersion: "1-12345",
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        passThrough: [
          {
            serviceId: "<id>",
            extendPaths: [
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
            ],
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
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `getTrackingCategoriesResponse`                                                                      | [components.GetTrackingCategoriesResponse](../../models/components/gettrackingcategoriesresponse.md) | :heavy_minus_sign:                                                                                   | Tracking categories                                                                                  |
| `unexpectedErrorResponse`                                                                            | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)             | :heavy_minus_sign:                                                                                   | Unexpected error                                                                                     |