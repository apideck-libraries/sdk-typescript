# AccountingBankFeedAccountsAllResponse

## Example Usage

```typescript
import { AccountingBankFeedAccountsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingBankFeedAccountsAllResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `getBankFeedAccountsResponse`                                                                    | [components.GetBankFeedAccountsResponse](../../models/components/getbankfeedaccountsresponse.md) | :heavy_minus_sign:                                                                               | Bank Feed Accounts                                                                               |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |