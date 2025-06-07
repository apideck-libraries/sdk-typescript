# AccountingBankFeedStatementsAllResponse

## Example Usage

```typescript
import { AccountingBankFeedStatementsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedStatementsAllResponse = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `getBankFeedStatementsResponse`                                                                      | [components.GetBankFeedStatementsResponse](../../models/components/getbankfeedstatementsresponse.md) | :heavy_minus_sign:                                                                                   | Bank Feed Statements                                                                                 |
| `unexpectedErrorResponse`                                                                            | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)             | :heavy_minus_sign:                                                                                   | Unexpected error                                                                                     |