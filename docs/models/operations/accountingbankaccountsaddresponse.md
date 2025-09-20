# AccountingBankAccountsAddResponse

## Example Usage

```typescript
import { AccountingBankAccountsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingBankAccountsAddResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createBankAccountResponse`                                                                  | [components.CreateBankAccountResponse](../../models/components/createbankaccountresponse.md) | :heavy_minus_sign:                                                                           | Bank Account created                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |