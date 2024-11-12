# AccountingProfitAndLossOneResponse


## Supported Types

### `components.GetProfitAndLossResponse`

```typescript
const value: components.GetProfitAndLossResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "ProfitAndLosses",
  operation: "one",
  data: {
    id: "12345",
    reportName: "ProfitAndLoss",
    startDate: "2017-01-01",
    endDate: "2017-01-01",
    currency: "USD",
    customerId: "123",
    income: {
      total: 200000,
      records: [
        {
          "id": "123",
          "name": "Income 1",
          "amount": 10000,
        },
        {
          "id": "456",
          "name": "Income 2",
          "amount": 20000,
        },
      ],
    },
    expenses: {
      total: 200000,
      records: [
        {
          "id": "123",
          "name": "Expense 1",
          "amount": 10000,
        },
        {
          "id": "456",
          "name": "Expense 2",
          "amount": 20000,
        },
      ],
    },
    netIncome: {
      total: 200000,
      records: "<value>",
    },
    netOperatingIncome: {
      total: 200000,
      records: "<value>",
    },
    grossProfit: {
      total: 200000,
      records: "<value>",
    },
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

