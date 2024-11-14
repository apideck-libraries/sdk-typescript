# FileStorageSharedLinksOneResponse

## Example Usage

```typescript
import { FileStorageSharedLinksOneResponse } from "apideck/models/operations";

let value: FileStorageSharedLinksOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getSharedLinkResponse: {
    statusCode: 200,
    status: "OK",
    service: "dropbox",
    resource: "Shared Links",
    operation: "one",
    data: {
      url: "https://www.box.com/s/vspke7y05sb214wjokpk",
      downloadUrl:
        "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg",
      target: {
        id: "12345",
        name: "sample.jpg",
        type: "file",
      },
      scope: "company",
      expiresAt: new Date("2022-09-30T07:43:32.000Z"),
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
    detail: {},
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getSharedLinkResponse`                                                                  | [components.GetSharedLinkResponse](../../models/components/getsharedlinkresponse.md)     | :heavy_minus_sign:                                                                       | Shared Link                                                                              |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |