# GetBankFeedStatementsResponse

Bank Feed Statements

## Example Usage

```typescript
import { GetBankFeedStatementsResponse } from "@apideck/unify/models/components";

let value: GetBankFeedStatementsResponse = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status Code                                                      | 200                                                                            |
| `status`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status                                                           | OK                                                                             |
| `service`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Apideck ID of service provider                                                 | quickbooks                                                                     |
| `resource`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Unified API resource name                                                      | bank-feed-statements                                                           |
| `operation`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Operation performed                                                            | all                                                                            |
| `data`                                                                         | [components.BankFeedStatement](../../models/components/bankfeedstatement.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `meta`                                                                         | [components.Meta](../../models/components/meta.md)                             | :heavy_minus_sign:                                                             | Response metadata                                                              |                                                                                |
| `links`                                                                        | [components.Links](../../models/components/links.md)                           | :heavy_minus_sign:                                                             | Links to navigate to previous or next pages through the API                    |                                                                                |
| `raw`                                                                          | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | Raw response from the integration when raw=true query param is provided        |                                                                                |