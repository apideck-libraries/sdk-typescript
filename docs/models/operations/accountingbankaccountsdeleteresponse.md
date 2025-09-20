# AccountingBankAccountsDeleteResponse

## Example Usage

```typescript
import { AccountingBankAccountsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingBankAccountsDeleteResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deleteBankAccountResponse`                                                                  | [components.DeleteBankAccountResponse](../../models/components/deletebankaccountresponse.md) | :heavy_minus_sign:                                                                           | Bank Account deleted                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |