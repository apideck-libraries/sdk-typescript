# AccountingBankFeedAccountsAllResponse

## Example Usage

```typescript
import { AccountingBankFeedAccountsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedAccountsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getBankFeedAccountsResponse: {
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
            value: 10,
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `getBankFeedAccountsResponse`                                                                    | [components.GetBankFeedAccountsResponse](../../models/components/getbankfeedaccountsresponse.md) | :heavy_minus_sign:                                                                               | Bank Feed Accounts                                                                               |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |