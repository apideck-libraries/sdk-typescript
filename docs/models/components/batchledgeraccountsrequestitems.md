# BatchLedgerAccountsRequestItems

## Example Usage

```typescript
import { BatchLedgerAccountsRequestItems } from "@apideck/unify/models/components";

let value: BatchLedgerAccountsRequestItems = {
  ref: "item-1",
  data: {
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
    lastReconciliationDate: new Date("2020-09-30"),
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        refName: "Marketing",
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

| Field                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                    | A caller-supplied reference for this item, echoed back on the matching result so each outcome can be tied to the record it came from. Must be unique within the request. Never sent to the connector.                                                                                                 | item-1                                                                                                                                                                                                                                                                                                |
| `data`                                                                                                                                                                                                                                                                                                | [components.LedgerAccountCreateInput](../../models/components/ledgeraccountcreateinput.md)                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                    | The writable shape of LedgerAccount for a batch create. Identical to [LedgerAccount](the model returned on reads) with the read-only properties removed — the same properties the single-record create endpoint rejects, so a batched record and a single-record create accept exactly the same body. |                                                                                                                                                                                                                                                                                                       |