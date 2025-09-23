# GetBankAccountResponse

Bank Account

## Example Usage

```typescript
import { GetBankAccountResponse } from "@apideck/unify/models/components";

let value: GetBankAccountResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "bank-accounts",
  operation: "one",
  data: {
    id: "12345",
    displayId: "BA-001",
    name: "Main Operating Account",
    accountNumber: "1234567890",
    accountType: "checking",
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
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdBy: "12345",
    updatedBy: "12345",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `statusCode`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | HTTP Response Status Code                                                            | 200                                                                                  |
| `status`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | HTTP Response Status                                                                 | OK                                                                                   |
| `service`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Apideck ID of service provider                                                       | quickbooks                                                                           |
| `resource`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | Unified API resource name                                                            | bank-accounts                                                                        |
| `operation`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | Operation performed                                                                  | one                                                                                  |
| `data`                                                                               | [components.AccountingBankAccount](../../models/components/accountingbankaccount.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |