# GetLedgerAccountResponse

LedgerAccount

## Example Usage

```typescript
import { GetLedgerAccountResponse } from "@apideck/unify/models/components";

let value: GetLedgerAccountResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "ledger-accounts",
  operation: "one",
  data: {
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
      bankName: "Chase Bank",
      accountNumber: "123465",
      accountName: "Main Operating Account",
      accountType: "credit_card",
      iban: "GB33BUKB20201555555555",
      bic: "CHASUS33",
      routingNumber: "021000021",
      bsbNumber: "062-001",
      branchIdentifier: "001",
      bankCode: "BNH",
      currency: "USD",
      country: "US",
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
    lastReconciliationDate: new Date("2020-09-30"),
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | xero                                                                    |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | ledger-accounts                                                         |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.LedgerAccount](../../models/components/ledgeraccount.md)    | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |