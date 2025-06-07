# AccountingLedgerAccountsAddResponse

## Example Usage

```typescript
import { AccountingLedgerAccountsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingLedgerAccountsAddResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createLedgerAccountResponse`                                                                    | [components.CreateLedgerAccountResponse](../../models/components/createledgeraccountresponse.md) | :heavy_minus_sign:                                                                               | LedgerAccount created                                                                            |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |