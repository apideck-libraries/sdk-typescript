# AtsApplicationsOneResponse


## Supported Types

### `components.GetApplicationResponse`

```typescript
const value: components.GetApplicationResponse = {
  statusCode: 200,
  status: "OK",
  service: "sap-successfactors",
  resource: "Applications",
  operation: "one",
  data: {
    id: "12345",
    applicantId: "12345",
    jobId: "12345",
    status: "open",
    stage: {
      id: "12345",
      name: "12345",
    },
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

