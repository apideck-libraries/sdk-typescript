# AccountingBankFeedStatementsAddResponse

## Example Usage

```typescript
import { AccountingBankFeedStatementsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedStatementsAddResponse = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createBankFeedStatementResponse`                                                                        | [components.CreateBankFeedStatementResponse](../../models/components/createbankfeedstatementresponse.md) | :heavy_minus_sign:                                                                                       | Bank Feed Statements                                                                                     |
| `unexpectedErrorResponse`                                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                 | :heavy_minus_sign:                                                                                       | Unexpected error                                                                                         |