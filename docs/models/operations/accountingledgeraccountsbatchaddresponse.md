# AccountingLedgerAccountsBatchAddResponse

## Example Usage

```typescript
import { AccountingLedgerAccountsBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingLedgerAccountsBatchAddResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `batchLedgerAccountsResponse`                                                                    | [components.BatchLedgerAccountsResponse](../../models/components/batchledgeraccountsresponse.md) | :heavy_minus_sign:                                                                               | Ledger Accounts batch processed                                                                  |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |