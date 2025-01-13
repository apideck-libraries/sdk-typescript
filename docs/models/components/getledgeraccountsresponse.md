# GetLedgerAccountsResponse

LedgerAccounts

## Example Usage

```typescript
import { GetLedgerAccountsResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetLedgerAccountsResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "ledger-accounts",
  operation: "all",
  data: [
    {
      id: "12345",
      displayId: "1-12345",
      code: "453",
      classification: "asset",
      type: "bank",
      subType: "CHECKING_ACCOUNT",
      name: "Bank account",
      fullyQualifiedName: "Asset.Bank.Checking_Account",
      description: "Main checking account",
      openingBalance: 75000,
      currentBalance: 20000,
      currency: "USD",
      taxType: "NONE",
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
        rate: 10,
      },
      level: 1,
      active: true,
      status: "active",
      header: true,
      bankAccount: {
        bankName: "Monzo",
        accountNumber: "123465",
        accountName: "SPACEX LLC",
        accountType: "credit_card",
        iban: "CH2989144532982975332",
        bic: "AUDSCHGGXXX",
        routingNumber: "012345678",
        bsbNumber: "062-001",
        branchIdentifier: "001",
        bankCode: "BNH",
        currency: "USD",
      },
      categories: [
        {
          id: "12345",
          name: "Finance Charges Expense",
        },
      ],
      parentAccount: {
        id: "12345",
        name: "Bank Accounts",
        displayId: "1-1100",
      },
      subAccount: false,
      subAccounts: [
        {
          id: "12345",
          accountSubName: "Petty Cash",
        },
      ],
      lastReconciliationDate: new RFCDate("2020-09-30"),
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: 10,
        },
      ],
      rowVersion: "1-12345",
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      passThrough: [
        {
          serviceId: "<id>",
          extendPaths: [
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
          ],
        },
      ],
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP Response Status Code                                              | 200                                                                    |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | HTTP Response Status                                                   | OK                                                                     |
| `service`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Apideck ID of service provider                                         | xero                                                                   |
| `resource`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Unified API resource name                                              | ledger-accounts                                                        |
| `operation`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Operation performed                                                    | all                                                                    |
| `data`                                                                 | [components.LedgerAccount](../../models/components/ledgeraccount.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `meta`                                                                 | [components.Meta](../../models/components/meta.md)                     | :heavy_minus_sign:                                                     | Response metadata                                                      |                                                                        |
| `links`                                                                | [components.Links](../../models/components/links.md)                   | :heavy_minus_sign:                                                     | Links to navigate to previous or next pages through the API            |                                                                        |