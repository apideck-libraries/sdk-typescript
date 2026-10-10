# BankFeedAccountInput

## Example Usage

```typescript
import { BankFeedAccountInput } from "@apideck/unify/models/components";

let value: BankFeedAccountInput = {
  bankAccountType: "bank",
  sourceAccountId: "src_456",
  sourceRoutingNumber: "021000021",
  sourceAccountNumber: "123465",
  targetAccountId: "tgt_789",
  targetAccountName: "Main Company Checking",
  targetAccountNumber: "NL91ABNA0417164300",
  balance: 25000,
  availableBalance: 24500,
  currency: "USD",
  feedStatus: "pending",
  country: "US",
  accountHolders: [
    {
      type: "consumer",
      relationship: "primary",
      firstName: "Jane",
      middleName: "Quinn",
      lastName: "Doe",
      suffix: "Jr",
      businessName: "Acme LLC",
    },
  ],
  emails: [
    {
      id: "123",
      email: "elon@musk.com",
      type: "primary",
    },
  ],
  addresses: [
    {
      id: "123",
      type: "primary",
      string: "25 Spring Street, Blackburn, VIC 3130",
      name: "HQ US",
      line1: "Main street",
      line2: "apt #",
      line3: "Suite #",
      line4: "delivery instructions",
      line5: "Attention: Finance Dept",
      streetNumber: "25",
      city: "San Francisco",
      state: "CA",
      postalCode: "94104",
      country: "US",
      latitude: "40.759211",
      longitude: "-73.984638",
      county: "Santa Clara",
      contactName: "Elon Musk",
      salutation: "Mr",
      phoneNumber: "111-111-1111",
      fax: "122-111-1111",
      email: "elon@musk.com",
      website: "https://elonmusk.com",
      notes: "Address notes or delivery instructions.",
      rowVersion: "1-12345",
    },
  ],
  phoneNumbers: [
    {
      id: "12345",
      countryCode: "1",
      areaCode: "323",
      number: "111-111-1111",
      extension: "105",
      type: "primary",
    },
  ],
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      refName: "Marketing",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `bankAccountType`                                                                                                                  | [components.BankAccountType](../../models/components/bankaccounttype.md)                                                           | :heavy_minus_sign:                                                                                                                 | Type of the bank account.                                                                                                          | bank                                                                                                                               |
| `sourceAccountId`                                                                                                                  | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The source account's unique identifier.                                                                                            | src_456                                                                                                                            |
| `sourceRoutingNumber`                                                                                                              | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Bank routing number (US)                                                                                                           | 021000021                                                                                                                          |
| `sourceAccountNumber`                                                                                                              | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The bank account number                                                                                                            | 123465                                                                                                                             |
| `targetAccountId`                                                                                                                  | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The target account's unique identifier in the accounting connector.                                                                | tgt_789                                                                                                                            |
| `targetAccountName`                                                                                                                | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Name associated with the target account.                                                                                           | Main Company Checking                                                                                                              |
| `targetAccountNumber`                                                                                                              | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Account number of the destination bank account.                                                                                    | NL91ABNA0417164300                                                                                                                 |
| `balance`                                                                                                                          | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The current balance of the source bank account.                                                                                    | 25000                                                                                                                              |
| `availableBalance`                                                                                                                 | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The available balance of the source bank account (considering pending transactions and overdraft).                                 | 24500                                                                                                                              |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `feedStatus`                                                                                                                       | [components.FeedStatus](../../models/components/feedstatus.md)                                                                     | :heavy_minus_sign:                                                                                                                 | Current status of the bank feed.                                                                                                   | pending                                                                                                                            |
| `country`                                                                                                                          | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Country code according to ISO 3166-1 alpha-2.                                                                                      | US                                                                                                                                 |
| `accountHolders`                                                                                                                   | [components.BankFeedAccountHolder](../../models/components/bankfeedaccountholder.md)[]                                             | :heavy_minus_sign:                                                                                                                 | The people or businesses that hold the source bank account. Optional; `plaid-exchange` requires at least one.                      |                                                                                                                                    |
| `emails`                                                                                                                           | [components.Email](../../models/components/email.md)[]                                                                             | :heavy_minus_sign:                                                                                                                 | Email addresses of the account holders. Optional; `plaid-exchange` requires at least one.                                          |                                                                                                                                    |
| `addresses`                                                                                                                        | [components.Address](../../models/components/address.md)[]                                                                         | :heavy_minus_sign:                                                                                                                 | Addresses of the account holders. Optional; `plaid-exchange` requires at least one.                                                |                                                                                                                                    |
| `phoneNumbers`                                                                                                                     | [components.PhoneNumber](../../models/components/phonenumber.md)[]                                                                 | :heavy_minus_sign:                                                                                                                 | Phone numbers of the account holders. Optional; `plaid-exchange` requires at least one.                                            |                                                                                                                                    |
| `customFields`                                                                                                                     | *components.CustomField*[]                                                                                                         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |