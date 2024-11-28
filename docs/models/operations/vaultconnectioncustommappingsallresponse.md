# VaultConnectionCustomMappingsAllResponse

## Example Usage

```typescript
import { VaultConnectionCustomMappingsAllResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionCustomMappingsAllResponse = {
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
    detail: "Missing Header: x-apideck-consumer-id",
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