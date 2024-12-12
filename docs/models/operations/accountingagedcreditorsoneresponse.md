# AccountingAgedCreditorsOneResponse

## Example Usage

```typescript
import { AccountingAgedCreditorsOneResponse } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AccountingAgedCreditorsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getAgedCreditorsResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "AgedCreditors",
    operation: "one",
    data: {
      reportGeneratedAt: new Date("2024-11-14T12:00:00.000Z"),
      reportAsOfDate: new RFCDate("2024-11-13"),
      periodCount: 4,
      periodLength: 30,
      outstandingBalances: [
        {
          customerId: "123",
          customerName: "Super Store",
          outstandingBalancesByCurrency: [
            {
              currency: "USD",
              balancesByPeriod: [
                {
                  startDate: new RFCDate("2024-01-01"),
                  endDate: new RFCDate("2024-01-30"),
                  totalAmount: 1500,
                  balancesByTransaction: [
                    {
                      transactionId: "INV-1001",
                      transactionDate: new RFCDate("2024-01-15"),
                      transactionType: "invoice",
                      dueDate: new RFCDate("2024-02-15"),
                      originalAmount: 1000,
                      outstandingBalance: 800,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getAgedCreditorsResponse`                                                                 | [components.GetAgedCreditorsResponse](../../models/components/getagedcreditorsresponse.md) | :heavy_minus_sign:                                                                         | Aged Creditors                                                                             |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |