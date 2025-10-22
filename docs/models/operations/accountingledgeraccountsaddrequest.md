# AccountingLedgerAccountsAddRequest

## Example Usage

```typescript
import { AccountingLedgerAccountsAddRequest } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AccountingLedgerAccountsAddRequest = {
  serviceId: "salesforce",
  ledgerAccount: {
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
    parentAccount: {
      id: "12345",
      name: "Bank Accounts",
      displayId: "1-1100",
    },
    subAccount: false,
    lastReconciliationDate: new RFCDate("2020-09-30"),
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
    rowVersion: "1-12345",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `ledgerAccount`                                                                                                                               | [components.LedgerAccountInput](../../models/components/ledgeraccountinput.md)                                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |