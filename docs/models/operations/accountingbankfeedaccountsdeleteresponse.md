# AccountingBankFeedAccountsDeleteResponse

## Example Usage

```typescript
import { AccountingBankFeedAccountsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedAccountsDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  deleteBankFeedAccountResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "bank-feed-accounts",
    operation: "delete",
    data: {
      id: "12345",
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deleteBankFeedAccountResponse`                                                                      | [components.DeleteBankFeedAccountResponse](../../models/components/deletebankfeedaccountresponse.md) | :heavy_minus_sign:                                                                                   | Bank Feed Accounts                                                                                   |
| `unexpectedErrorResponse`                                                                            | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)             | :heavy_minus_sign:                                                                                   | Unexpected error                                                                                     |