# VaultCustomFieldsAllResponse

## Example Usage

```typescript
import { VaultCustomFieldsAllResponse } from "@apideck/unify/models/operations";

let value: VaultCustomFieldsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCustomFieldsResponse: {
    statusCode: 200,
    status: "OK",
    data: [
      {
        id: "123456",
        name: "SSN",
        description: "Employee Level",
        value: "495172776",
      },
    ],
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getCustomFieldsResponse`                                                                | [components.GetCustomFieldsResponse](../../models/components/getcustomfieldsresponse.md) | :heavy_minus_sign:                                                                       | Custom mapping                                                                           |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |