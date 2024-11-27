# AccountingJournalEntriesAddResponse

## Example Usage

```typescript
import { AccountingJournalEntriesAddResponse } from "@apideck/sdk/models/operations";

let value: AccountingJournalEntriesAddResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  createJournalEntryResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "journal-entries",
    operation: "add",
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createJournalEntryResponse`                                                                   | [components.CreateJournalEntryResponse](../../models/components/createjournalentryresponse.md) | :heavy_minus_sign:                                                                             | JournalEntries                                                                                 |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |