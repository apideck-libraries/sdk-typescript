# AccountingBankFeedStatementsAllResponse

## Example Usage

```typescript
import { AccountingBankFeedStatementsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedStatementsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getBankFeedStatementsResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "bank-feed-statements",
    operation: "all",
    data: [
      {
        id: "12345",
        bankFeedAccountId: "acc_456",
        status: "pending",
        startDate: new Date("2021-05-01T12:00:00.000Z"),
        endDate: new Date("2025-01-31T12:00:00.000Z"),
        startBalance: 10500.25,
        startBalanceCreditOrDebit: "debit",
        endBalance: 9800.5,
        endBalanceCreditOrDebit: "debit",
        transactions: [
          {
            postedDate: new Date("2025-01-15T12:00:00.000Z"),
            description: "Payment received from ACME Corp",
            amount: 250,
            creditOrDebit: "debit",
            sourceTransactionId: "txn_987",
            counterparty: "ACME Corp",
            reference: "INV-2025-01",
            transactionType: "payment",
          },
        ],
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        updatedBy: "12345",
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `getBankFeedStatementsResponse`                                                                      | [components.GetBankFeedStatementsResponse](../../models/components/getbankfeedstatementsresponse.md) | :heavy_minus_sign:                                                                                   | Bank Feed Statements                                                                                 |
| `unexpectedErrorResponse`                                                                            | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)             | :heavy_minus_sign:                                                                                   | Unexpected error                                                                                     |