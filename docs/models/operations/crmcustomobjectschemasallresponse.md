# CrmCustomObjectSchemasAllResponse

## Example Usage

```typescript
import { CrmCustomObjectSchemasAllResponse } from "@apideck/unify/models/operations";

let value: CrmCustomObjectSchemasAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCustomObjectSchemasResponse: {
    statusCode: 200,
    status: "OK",
    service: "zoho-crm",
    resource: "custom-object-schemas",
    operation: "all",
    data: [
      {
        id: "cos_12345",
        name: "project",
        description: "This schema defines a project custom object",
        fields: [
          {
            id: "field_123",
            name: "project_name",
            description: "Name of the project",
            type: "string",
            required: true,
            options: [
              {
                value: "option1",
                label: "Option 1",
              },
            ],
            defaultValue: "New Project",
          },
        ],
        visible: true,
        active: true,
        createdBy: "12345",
        updatedBy: "12345",
        updatedAt: "2020-09-30T07:43:32.000Z",
        createdAt: "2020-09-30T07:43:32.000Z",
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
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `getCustomObjectSchemasResponse`                                                                       | [components.GetCustomObjectSchemasResponse](../../models/components/getcustomobjectschemasresponse.md) | :heavy_minus_sign:                                                                                     | Custom object schemas                                                                                  |
| `unexpectedErrorResponse`                                                                              | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)               | :heavy_minus_sign:                                                                                     | Unexpected error                                                                                       |