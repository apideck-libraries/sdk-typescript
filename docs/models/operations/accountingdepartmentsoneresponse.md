# AccountingDepartmentsOneResponse


## Supported Types

### `components.GetAccountingDepartmentResponse`

```typescript
const value: components.GetAccountingDepartmentResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "subsidiaries",
  operation: "one",
  data: {
    id: "12345",
    parentId: "12345",
    name: "Sales",
    status: "active",
    subsidiaries: [
      {
        id: "12345",
        name: "SpaceX",
      },
    ],
    rowVersion: "1-12345",
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

