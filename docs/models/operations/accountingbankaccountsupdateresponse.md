# AccountingBankAccountsUpdateResponse

## Example Usage

```typescript
import { AccountingBankAccountsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingBankAccountsUpdateResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `updateBankAccountResponse`                                                                  | [components.UpdateBankAccountResponse](../../models/components/updatebankaccountresponse.md) | :heavy_minus_sign:                                                                           | Bank Account updated                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |