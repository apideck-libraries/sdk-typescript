# CrmCustomObjectSchemasAddResponse

## Example Usage

```typescript
import { CrmCustomObjectSchemasAddResponse } from "@apideck/unify/models/operations";

let value: CrmCustomObjectSchemasAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  createCustomObjectSchemaResponse: {
    statusCode: 201,
    status: "Created",
    service: "zoho-crm",
    resource: "custom-object-schemas",
    operation: "add",
    data: {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createCustomObjectSchemaResponse`                                                                         | [components.CreateCustomObjectSchemaResponse](../../models/components/createcustomobjectschemaresponse.md) | :heavy_minus_sign:                                                                                         | Custom object schema created                                                                               |
| `unexpectedErrorResponse`                                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                   | :heavy_minus_sign:                                                                                         | Unexpected error                                                                                           |