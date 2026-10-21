# GetBankFeedAccountResponse

Bank Feed Accounts

## Example Usage

```typescript
import { GetBankFeedAccountResponse } from "@apideck/unify/models/components";

let value: GetBankFeedAccountResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "bank-feed-accounts",
  operation: "one",
  data: {
    id: "12345",
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
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedBy: "12345",
    createdBy: "12345",
  },
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
    totalCount: 1,
    warnings: [
      {
        type: "downstream_request_failed",
        statusCode: 429,
        operation: "getManager",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status Code                                                | 200                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status                                                     | OK                                                                       |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Apideck ID of service provider                                           | xero                                                                     |
| `resource`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Unified API resource name                                                | bank-feed-accounts                                                       |
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Operation performed                                                      | one                                                                      |
| `data`                                                                   | [components.BankFeedAccount](../../models/components/bankfeedaccount.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `meta`                                                                   | [components.Meta](../../models/components/meta.md)                       | :heavy_minus_sign:                                                       | Response metadata                                                        |                                                                          |
| `raw`                                                                    | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | Raw response from the integration when raw=true query param is provided  |                                                                          |