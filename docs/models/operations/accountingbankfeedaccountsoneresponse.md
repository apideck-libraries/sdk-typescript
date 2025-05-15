# AccountingBankFeedAccountsOneResponse

## Example Usage

```typescript
import { AccountingBankFeedAccountsOneResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedAccountsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getBankFeedAccountResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "bank-feed-accounts",
    operation: "one",
    data: {
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
          value: [
            {},
          ],
        },
      ],
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedBy: "12345",
      createdBy: "12345",
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `getBankFeedAccountResponse`                                                                   | [components.GetBankFeedAccountResponse](../../models/components/getbankfeedaccountresponse.md) | :heavy_minus_sign:                                                                             | Bank Feed Accounts                                                                             |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |