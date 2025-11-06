# AccountingBankAccountsUpdateRequest

## Example Usage

```typescript
import { AccountingBankAccountsUpdateRequest } from "@apideck/unify/models/operations";

let value: AccountingBankAccountsUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  accountingBankAccount: {
    displayId: "BA-001",
    name: "Main Operating Account",
    accountNumber: "123465",
    accountType: "checking",
    ledgerAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    bankName: "Chase Bank",
    currency: "USD",
    balance: 25000,
    availableBalance: 24500,
    overdraftLimit: 5000,
    routingNumber: "021000021",
    iban: "GB33BUKB20201555555555",
    bic: "CHASUS33",
    bsbNumber: "062-001",
    branchIdentifier: "001",
    bankCode: "BNH",
    country: "US",
    status: "active",
    description: "Primary operating account for daily transactions",
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `accountingBankAccount`                                                                                                                       | [components.AccountingBankAccountInput](../../models/components/accountingbankaccountinput.md)                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |