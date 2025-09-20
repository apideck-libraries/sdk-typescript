# AccountingBankAccountsAllResponse

## Example Usage

```typescript
import { AccountingBankAccountsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingBankAccountsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getBankAccountsResponse`                                                                | [components.GetBankAccountsResponse](../../models/components/getbankaccountsresponse.md) | :heavy_minus_sign:                                                                       | Bank Accounts                                                                            |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |