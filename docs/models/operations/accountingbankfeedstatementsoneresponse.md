# AccountingBankFeedStatementsOneResponse

## Example Usage

```typescript
import { AccountingBankFeedStatementsOneResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedStatementsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getBankFeedStatementResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "bank-feed-statements",
    operation: "one",
    data: {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `getBankFeedStatementResponse`                                                                     | [components.GetBankFeedStatementResponse](../../models/components/getbankfeedstatementresponse.md) | :heavy_minus_sign:                                                                                 | Bank Feed Statements                                                                               |
| `unexpectedErrorResponse`                                                                          | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)           | :heavy_minus_sign:                                                                                 | Unexpected error                                                                                   |