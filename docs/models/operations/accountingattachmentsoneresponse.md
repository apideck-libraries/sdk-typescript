# AccountingAttachmentsOneResponse


## Supported Types

### `components.GetAttachmentResponse`

```typescript
const value: components.GetAttachmentResponse = {
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
};
```

### `components.UnexpectedErrorResponse`

```typescript
const value: components.UnexpectedErrorResponse = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

