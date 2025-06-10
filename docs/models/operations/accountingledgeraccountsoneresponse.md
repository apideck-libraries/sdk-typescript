# AccountingLedgerAccountsOneResponse

## Example Usage

```typescript
import { AccountingLedgerAccountsOneResponse } from "@apideck/unify/models/operations";

let value: AccountingLedgerAccountsOneResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getLedgerAccountResponse`                                                                 | [components.GetLedgerAccountResponse](../../models/components/getledgeraccountresponse.md) | :heavy_minus_sign:                                                                         | LedgerAccount                                                                              |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |