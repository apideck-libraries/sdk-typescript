# CrmCustomObjectsOneResponse

## Example Usage

```typescript
import { CrmCustomObjectsOneResponse } from "@apideck/unify/models/operations";

let value: CrmCustomObjectsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCustomObjectResponse: {
    statusCode: 200,
    status: "OK",
    service: "zoho-crm",
    resource: "custom-objects",
    operation: "one",
    data: {
      id: "co_12345",
      ownerId: "user_12345",
      name: "project",
      fields: [
        {
          name: "name",
          value: "string",
        },
      ],
      updatedBy: "user_12345",
      createdBy: "user_12345",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getCustomObjectResponse`                                                                | [components.GetCustomObjectResponse](../../models/components/getcustomobjectresponse.md) | :heavy_minus_sign:                                                                       | Custom object                                                                            |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |