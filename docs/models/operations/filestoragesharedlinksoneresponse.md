# FileStorageSharedLinksOneResponse


## Supported Types

### `components.GetSharedLinkResponse`

```typescript
const value: components.GetSharedLinkResponse = {
  statusCode: 200,
  status: "OK",
  service: "dropbox",
  resource: "Shared Links",
  operation: "one",
  data: {
    url: "https://www.box.com/s/vspke7y05sb214wjokpk",
    downloadUrl: "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg",
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

