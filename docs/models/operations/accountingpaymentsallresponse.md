# AccountingPaymentsAllResponse


## Supported Types

### `components.GetPaymentsResponse`

```typescript
const value: components.GetPaymentsResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "payments",
  operation: "all",
  data: [
    {
      id: "12345",
      downstreamId: "12345",
      currency: "USD",
      currencyRate: 0.69,
      totalAmount: 49.99,
      reference: "123456",
      paymentMethod: "cash",
      paymentMethodReference: "123456",
      paymentMethodId: "12345",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
      },
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
      customer: {
        id: "12345",
        displayId: "CUST00101",
        displayName: "Windsurf Shop",
        companyName: "The boring company",
        email: "boring@boring.com",
      },
      companyId: "12345",
      reconciled: true,
      status: "authorised",
      type: "accounts_receivable",
      allocations: [
        {
          id: "123456",
          code: "N091",
          amount: 49.99,
          allocationId: "123456",
        },
      ],
      note: "Some notes about this transaction",
      number: "123456",
      trackingCategories: [
        {
          id: "123456",
          name: "New York",
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: {},
        },
      ],
      rowVersion: "1-12345",
      displayId: "123456",
      updatedBy: "12345",
      createdBy: "12345",
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

