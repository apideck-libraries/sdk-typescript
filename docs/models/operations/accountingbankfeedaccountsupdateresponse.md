# AccountingBankFeedAccountsUpdateResponse

## Example Usage

```typescript
import { AccountingBankFeedAccountsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedAccountsUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateBankFeedAccountResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "bank-feed-accounts",
    operation: "update",
    data: {
      id: "12345",
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updateBankFeedAccountResponse`                                                                      | [components.UpdateBankFeedAccountResponse](../../models/components/updatebankfeedaccountresponse.md) | :heavy_minus_sign:                                                                                   | Bank Feed Accounts                                                                                   |
| `unexpectedErrorResponse`                                                                            | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)             | :heavy_minus_sign:                                                                                   | Unexpected error                                                                                     |