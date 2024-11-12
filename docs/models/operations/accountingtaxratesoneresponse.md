# AccountingTaxRatesOneResponse


## Supported Types

### `components.GetTaxRateResponse`

```typescript
const value: components.GetTaxRateResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "tax-rates",
  operation: "one",
  data: {
    id: "1234",
    name: "GST on Purchases",
    code: "ABN",
    description: "Reduced rate GST Purchases",
    effectiveTaxRate: 10,
    totalTaxRate: 10,
    taxPayableAccountId: "123456",
    taxRemittedAccountId: "123456",
    components: [
      {
        id: "10",
        name: "GST",
        rate: 10,
        compound: true,
      },
    ],
    type: "NONE",
    reportTaxType: "NONE",
    originalTaxRateId: "12345",
    status: "active",
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

