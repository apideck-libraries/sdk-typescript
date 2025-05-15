# GetBankFeedStatementResponse

Bank Feed Statements

## Example Usage

```typescript
import { GetBankFeedStatementResponse } from "@apideck/unify/models/components";

let value: GetBankFeedStatementResponse = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status Code                                                    | 200                                                                          |
| `status`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | HTTP Response Status                                                         | OK                                                                           |
| `service`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Apideck ID of service provider                                               | quickbooks                                                                   |
| `resource`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Unified API resource name                                                    | bank-feed-statements                                                         |
| `operation`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Operation performed                                                          | one                                                                          |
| `data`                                                                       | [components.BankFeedStatement](../../models/components/bankfeedstatement.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `raw`                                                                        | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Raw response from the integration when raw=true query param is provided      |                                                                              |