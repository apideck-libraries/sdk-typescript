# PosTendersOneResponse


## Supported Types

### `components.GetTenderResponse`

```typescript
const value: components.GetTenderResponse = {
  statusCode: 200,
  status: "OK",
  service: "clover",
  resource: "Tenders",
  operation: "one",
  data: {
    id: "12345",
    key: "com.clover.tender.cash",
    label: "Cash",
    active: true,
    hidden: true,
    editable: true,
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

