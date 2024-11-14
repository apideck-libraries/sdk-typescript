# AccountingBalanceSheetOneResponse

## Example Usage

```typescript
import { AccountingBalanceSheetOneResponse } from "apideck/models/operations";

let value: AccountingBalanceSheetOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getBalanceSheetResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "BalanceSheets",
    operation: "one",
    data: {
      reports: [
        {
          id: "12345",
          reportName: "BalanceSheet",
          startDate: "2017-01-01",
          endDate: "2017-01-31",
          currency: "USD",
          assets: {
            accountId: "1",
            code: "1000",
            name: "Assets",
            value: 1000,
            items: [
              {
                "account_id": "101",
                "code": "1100",
                "name": "Current Assets",
                "amount": 20000,
                "items": [
                  {
                    "account_id": "1011",
                    "code": "1101",
                    "name": "Cash and Cash Equivalents",
                    "amount": 10000,
                  },
                  {
                    "account_id": "1012",
                    "code": "1102",
                    "name": "Accounts Receivable",
                    "amount": 5000,
                  },
                  {
                    "account_id": "1013",
                    "code": "1103",
                    "name": "Inventory",
                    "amount": 3000,
                  },
                  {
                    "account_id": "1014",
                    "code": "1104",
                    "name": "Prepaid Expenses",
                    "amount": 2000,
                  },
                ],
              },
              {
                "account_id": "102",
                "code": "1200",
                "name": "Non-Current Assets",
                "amount": 30000,
                "items": [
                  {
                    "account_id": "1021",
                    "code": "1201",
                    "name": "Property, Plant, and Equipment (PPE)",
                    "amount": 25000,
                  },
                  {
                    "account_id": "1022",
                    "code": "1202",
                    "name": "Intangible Assets",
                    "amount": 5000,
                    "items": [
                      {
                        "account_id": "10221",
                        "code": "1203",
                        "name": "Goodwill",
                        "amount": 3000,
                      },
                      {
                        "account_id": "10222",
                        "code": "1204",
                        "name": "Patents",
                        "amount": 2000,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          liabilities: {
            accountId: "2",
            code: "2000",
            name: "Liabilities",
            value: 1000,
            items: [
              {
                "account_id": "201",
                "code": "2100",
                "name": "Current Liabilities",
                "amount": 10000,
                "items": [
                  {
                    "account_id": "2011",
                    "code": "2101",
                    "name": "Accounts Payable",
                    "amount": 4000,
                  },
                  {
                    "account_id": "2012",
                    "code": "2102",
                    "name": "Short-Term Debt",
                    "amount": 2000,
                  },
                  {
                    "account_id": "2013",
                    "code": "2103",
                    "name": "Accrued Expenses",
                    "amount": 1000,
                  },
                  {
                    "account_id": "2014",
                    "code": "2104",
                    "name": "Current Portion of Long-Term Debt",
                    "amount": 3000,
                  },
                ],
              },
              {
                "account_id": "202",
                "code": "2200",
                "name": "Non-Current Liabilities",
                "amount": 20000,
                "items": [
                  {
                    "account_id": "2021",
                    "code": "2201",
                    "name": "Long-Term Debt",
                    "amount": 15000,
                  },
                  {
                    "account_id": "2022",
                    "code": "2202",
                    "name": "Deferred Tax Liabilities",
                    "amount": 3000,
                  },
                  {
                    "account_id": "2023",
                    "code": "2203",
                    "name": "Pension Liabilities",
                    "amount": 2000,
                  },
                ],
              },
            ],
          },
          equity: {
            accountId: "3",
            code: "3000",
            name: "Equity",
            value: 1000,
            items: [
              {
                "account_id": "301",
                "code": "3100",
                "name": "Common Stock",
                "amount": 5000,
              },
              {
                "account_id": "302",
                "code": "3200",
                "name": "Retained Earnings",
                "amount": 10000,
              },
              {
                "account_id": "303",
                "code": "3300",
                "name": "Additional Paid-In Capital",
                "amount": 3000,
              },
              {
                "account_id": "304",
                "code": "3400",
                "name": "Treasury Stock",
                "amount": -1000,
              },
              {
                "account_id": "305",
                "code": "3500",
                "name": "Other Comprehensive Income",
                "amount": 3000,
              },
            ],
          },
          netAssets: 1000,
          updatedBy: "12345",
          createdBy: "12345",
          updatedAt: new Date("2020-09-30T07:43:32.000Z"),
          createdAt: new Date("2020-09-30T07:43:32.000Z"),
          uncategorizedItems: {
            accountId: "3",
            code: "3000",
            name: "Uncategorized Items",
            value: 1000,
            items: [
              {
                "account_id": "301",
                "code": "3100",
                "name": "not linked account",
                "amount": 1000,
              },
            ],
          },
        },
      ],
    },
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {},
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getBalanceSheetResponse`                                                                | [components.GetBalanceSheetResponse](../../models/components/getbalancesheetresponse.md) | :heavy_minus_sign:                                                                       | BalanceSheet                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |