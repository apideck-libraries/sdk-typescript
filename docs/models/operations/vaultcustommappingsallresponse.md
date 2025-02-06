# VaultCustomMappingsAllResponse

## Example Usage

```typescript
import { VaultCustomMappingsAllResponse } from "@apideck/unify/models/operations";

let value: VaultCustomMappingsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCustomMappingsResponse: {
    statusCode: 200,
    status: "OK",
    data: [
      {
        id: "hris+employees+first_aid_training",
        label: "First Aid Training",
        description: "First Aid Training completed after 2019-01-01",
        value: "$.root.training.first_aid",
        key: "first_aid_training",
        required: false,
        customField: true,
        consumerId: "test_user_id",
        example: "Some value",
      },
    ],
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {},
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getCustomMappingsResponse`                                                                  | [components.GetCustomMappingsResponse](../../models/components/getcustommappingsresponse.md) | :heavy_minus_sign:                                                                           | Custom mapping                                                                               |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |