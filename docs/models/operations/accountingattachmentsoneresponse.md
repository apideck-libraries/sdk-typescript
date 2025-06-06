# AccountingAttachmentsOneResponse

## Example Usage

```typescript
import { AccountingAttachmentsOneResponse } from "@apideck/unify/models/operations";

let value: AccountingAttachmentsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getAttachmentResponse: {
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "payments",
    operation: "one",
    data: {
      id: "12345",
      displayId: "sample ID",
      name: "sample.jpg",
      mimeType: "image/jpeg",
      size: 1810673,
      reference: {
        type: "invoice",
        id: "12345",
      },
      description: "A sample image",
      parentFolderId: "123",
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
| `getAttachmentResponse`                                                                  | [components.GetAttachmentResponse](../../models/components/getattachmentresponse.md)     | :heavy_minus_sign:                                                                       | Attachments                                                                              |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |