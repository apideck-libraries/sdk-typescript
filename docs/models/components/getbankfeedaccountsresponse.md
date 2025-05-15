# GetBankFeedAccountsResponse

Bank Feed Accounts

## Example Usage

```typescript
import { GetBankFeedAccountsResponse } from "@apideck/unify/models/components";

let value: GetBankFeedAccountsResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "bank-feed-accounts",
  operation: "all",
  data: [
    {
      id: "12345",
      bankAccountType: "bank",
      sourceAccountId: "src_456",
      targetAccountId: "tgt_789",
      targetAccountName: "Main Company Checking",
      targetAccountNumber: "NL91ABNA0417164300",
      currency: "USD",
      feedStatus: "pending",
      country: "US",
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
      updatedBy: "12345",
      createdBy: "12345",
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status Code                                                  | 200                                                                        |
| `status`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status                                                       | OK                                                                         |
| `service`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Apideck ID of service provider                                             | quickbooks                                                                 |
| `resource`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Unified API resource name                                                  | bank-feed-accounts                                                         |
| `operation`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Operation performed                                                        | all                                                                        |
| `data`                                                                     | [components.BankFeedAccount](../../models/components/bankfeedaccount.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `meta`                                                                     | [components.Meta](../../models/components/meta.md)                         | :heavy_minus_sign:                                                         | Response metadata                                                          |                                                                            |
| `links`                                                                    | [components.Links](../../models/components/links.md)                       | :heavy_minus_sign:                                                         | Links to navigate to previous or next pages through the API                |                                                                            |
| `raw`                                                                      | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | Raw response from the integration when raw=true query param is provided    |                                                                            |