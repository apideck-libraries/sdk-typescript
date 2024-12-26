# AccountingBalanceSheetOneResponse

## Example Usage

```typescript
import { AccountingBalanceSheetOneResponse } from "@apideck/unify/models/operations";

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
            value: 50000,
            items: [
              {
                "account_id": "101",
                "code": "1100",
                "name": "Current Assets",
                "value": 20000,
                "items": [
                  {
                    "account_id": "1011",
                    "code": "1101",
                    "name": "Cash and Cash Equivalents",
                    "value": 10000,
                  },
                  {
                    "account_id": "1012",
                    "code": "1102",
                    "name": "Accounts Receivable",
                    "value": 5000,
                  },
                  {
                    "account_id": "1013",
                    "code": "1103",
                    "name": "Inventory",
                    "value": 3000,
                  },
                  {
                    "account_id": "1014",
                    "code": "1104",
                    "name": "Prepaid Expenses",
                    "value": 2000,
                  },
                ],
              },
              {
                "account_id": "102",
                "code": "1200",
                "name": "Non-Current Assets",
                "value": 30000,
                "items": [
                  {
                    "account_id": "1021",
                    "code": "1201",
                    "name": "Property, Plant, and Equipment (PPE)",
                    "value": 25000,
                  },
                  {
                    "account_id": "1022",
                    "code": "1202",
                    "name": "Intangible Assets",
                    "value": 5000,
                    "items": [
                      {
                        "account_id": "10221",
                        "code": "1203",
                        "name": "Goodwill",
                        "value": 3000,
                      },
                      {
                        "account_id": "10222",
                        "code": "1204",
                        "name": "Patents",
                        "value": 2000,
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
            value: 30000,
            items: [
              {
                "account_id": "201",
                "code": "2100",
                "name": "Current Liabilities",
                "value": 10000,
                "items": [
                  {
                    "account_id": "2011",
                    "code": "2101",
                    "name": "Accounts Payable",
                    "value": 4000,
                  },
                  {
                    "account_id": "2012",
                    "code": "2102",
                    "name": "Short-Term Debt",
                    "value": 2000,
                  },
                  {
                    "account_id": "2013",
                    "code": "2103",
                    "name": "Accrued Expenses",
                    "value": 1000,
                  },
                  {
                    "account_id": "2014",
                    "code": "2104",
                    "name": "Current Portion of Long-Term Debt",
                    "value": 3000,
                  },
                ],
              },
              {
                "account_id": "202",
                "code": "2200",
                "name": "Non-Current Liabilities",
                "value": 20000,
                "items": [
                  {
                    "account_id": "2021",
                    "code": "2201",
                    "name": "Long-Term Debt",
                    "value": 15000,
                  },
                  {
                    "account_id": "2022",
                    "code": "2202",
                    "name": "Deferred Tax Liabilities",
                    "value": 3000,
                  },
                  {
                    "account_id": "2023",
                    "code": "2203",
                    "name": "Pension Liabilities",
                    "value": 2000,
                  },
                ],
              },
            ],
          },
          equity: {
            accountId: "3",
            code: "3000",
            name: "Equity",
            value: 20000,
            items: [
              {
                "account_id": "301",
                "code": "3100",
                "name": "Common Stock",
                "value": 5000,
              },
              {
                "account_id": "302",
                "code": "3200",
                "name": "Retained Earnings",
                "value": 10000,
              },
              {
                "account_id": "303",
                "code": "3300",
                "name": "Additional Paid-In Capital",
                "value": 3000,
              },
              {
                "account_id": "304",
                "code": "3400",
                "name": "Treasury Stock",
                "value": -1000,
              },
              {
                "account_id": "305",
                "code": "3500",
                "name": "Other Comprehensive Income",
                "value": 3000,
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
                "value": 1000,
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
    detail: "Missing Header: x-apideck-consumer-id",
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