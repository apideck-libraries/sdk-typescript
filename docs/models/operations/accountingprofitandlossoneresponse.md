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
      endDate: "2017-01-31",
      currency: "USD",
      income: {
        id: "123",
        code: "123",
        title: "Operating Income",
        type: "Section",
        total: 60000,
        records: [
          {
            "id": "137",
            "title": "Sales of products",
            "code": "137",
            "type": "Section",
            "total": 20000,
            "records": [
              {
                "id": "13701",
                "title": "Sales of products",
                "code": "13701",
                "type": "Record",
                "total": 20000,
              },
            ],
          },
          {
            "id": "138",
            "title": "Sales of services",
            "code": "138",
            "type": "Section",
            "total": 40000,
            "records": [
              {
                "id": "789",
                "code": "789",
                "title": "Sales of External Services",
                "type": "Record",
                "total": 10000,
              },
              {
                "id": "101",
                "code": "101",
                "title": "Sales of Internal Services",
                "type": "Record",
                "total": 30000,
              },
            ],
          },
        ],
      },
      costOfGoodsSold: {
        id: "123",
        code: "123",
        title: "Cost of Goods Sold",
        type: "Section",
        total: 12000,
        records: [
          {
            "id": "123",
            "code": "123",
            "title": "COGS Sales",
            "type": "Record",
            "total": 12000,
          },
        ],
      },
      expenses: {
        id: "123",
        code: "123",
        title: "Operating Expenses",
        type: "Section",
        total: 14000,
        records: [
          {
            "id": "137",
            "title": "Maintenance",
            "code": "137",
            "type": "Record",
            "total": 1000,
          },
          {
            "id": "138",
            "title": "Rent",
            "code": "138",
            "type": "Record",
            "total": 10000,
          },
          {
            "id": "789",
            "code": "789",
            "title": "Utilities",
            "type": "Section",
            "total": 3000,
            "records": [
              {
                "id": "101",
                "code": "101",
                "title": "Electricity",
                "type": "Record",
                "total": 2000,
              },
              {
                "id": "102",
                "code": "102",
                "title": "Telephone",
                "type": "Record",
                "total": 1000,
              },
            ],
          },
        ],
      },
      otherIncome: {
        id: "123",
        code: "123",
        title: "Other Income",
        type: "Section",
        total: 3000,
        records: [
          {
            "id": "123",
            "code": "123",
            "title": "Interest Income",
            "type": "Record",
            "total": 2000,
          },
          {
            "id": "123",
            "code": "123",
            "title": "Foreign Exchange Gain",
            "type": "Record",
            "total": 1000,
          },
        ],
      },
      otherExpenses: {
        id: "123",
        code: "123",
        title: "Other Expenses",
        type: "Section",
        total: 1000,
        records: [
          {
            "id": "123",
            "code": "123",
            "title": "Unrealized Gain/Loss",
            "type": "Record",
            "total": 1000,
          },
        ],
      },
      uncategorizedAccounts: {
        id: "123",
        code: "123",
        title: "Uncategorized Accounts",
        type: "Section",
        total: 0,
        records: [
          {
            "id": "123",
            "code": "123",
            "title": "Elimination Adjustments",
            "type": "Record",
            "total": 0,
          },
        ],
      },
      grossProfit: {
        total: 10000,
      },
      netOperatingIncome: {
        total: 10000,
      },
      netIncome: {
        total: 10000,
      },
      customer: "123",
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