# AccountingBankFeedStatementsAddRequest

## Example Usage

```typescript
import { AccountingBankFeedStatementsAddRequest } from "@apideck/unify/models/operations";

let value: AccountingBankFeedStatementsAddRequest = {
  serviceId: "salesforce",
  bankFeedStatement: {
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
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `bankFeedStatement`                                                                                                                           | [components.BankFeedStatementInput](../../models/components/bankfeedstatementinput.md)                                                        | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |