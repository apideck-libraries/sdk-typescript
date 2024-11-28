# AccountingProfitAndLossOneResponse

## Example Usage

```typescript
import { AccountingProfitAndLossOneResponse } from "@apideck/unify/models/operations";

let value: AccountingProfitAndLossOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getProfitAndLossResponse: {
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getProfitAndLossResponse`                                                                 | [components.GetProfitAndLossResponse](../../models/components/getprofitandlossresponse.md) | :heavy_minus_sign:                                                                         | Profit & Loss Report                                                                       |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |