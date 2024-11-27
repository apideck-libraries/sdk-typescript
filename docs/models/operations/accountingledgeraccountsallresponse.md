# AccountingLedgerAccountsAllResponse

## Example Usage

```typescript
import { AccountingLedgerAccountsAllResponse } from "@apideck/sdk/models/operations";
import { RFCDate } from "@apideck/sdk/types";

let value: AccountingLedgerAccountsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getLedgerAccountsResponse: {
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getLedgerAccountsResponse`                                                                  | [components.GetLedgerAccountsResponse](../../models/components/getledgeraccountsresponse.md) | :heavy_minus_sign:                                                                           | LedgerAccounts                                                                               |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |