# AccountingTaxRatesAllResponse


## Supported Types

### `components.GetTaxRatesResponse`

```typescript
const value: components.GetTaxRatesResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "tax-rates",
  operation: "all",
  data: [
    {
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
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

