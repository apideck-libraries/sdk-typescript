# AccountingLedgerAccountsDeleteResponse

## Example Usage

```typescript
import { AccountingLedgerAccountsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingLedgerAccountsDeleteResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deleteLedgerAccountResponse`                                                                    | [components.DeleteLedgerAccountResponse](../../models/components/deleteledgeraccountresponse.md) | :heavy_minus_sign:                                                                               | LedgerAccount deleted                                                                            |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |