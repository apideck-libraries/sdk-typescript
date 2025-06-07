# AccountingLedgerAccountsUpdateResponse

## Example Usage

```typescript
import { AccountingLedgerAccountsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingLedgerAccountsUpdateResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updateLedgerAccountResponse`                                                                    | [components.UpdateLedgerAccountResponse](../../models/components/updateledgeraccountresponse.md) | :heavy_minus_sign:                                                                               | LedgerAccount updated                                                                            |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |