# AccountingBankFeedStatementsUpdateResponse

## Example Usage

```typescript
import { AccountingBankFeedStatementsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedStatementsUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateBankFeedStatementResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "bank-feed-statements",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updateBankFeedStatementResponse`                                                                        | [components.UpdateBankFeedStatementResponse](../../models/components/updatebankfeedstatementresponse.md) | :heavy_minus_sign:                                                                                       | Bank Feed Statements                                                                                     |
| `unexpectedErrorResponse`                                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                 | :heavy_minus_sign:                                                                                       | Unexpected error                                                                                         |