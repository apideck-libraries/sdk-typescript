# AccountingSalesReceiptsAllResponse

## Example Usage

```typescript
import { AccountingSalesReceiptsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingSalesReceiptsAllResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getSalesReceiptsResponse`                                                                 | [components.GetSalesReceiptsResponse](../../models/components/getsalesreceiptsresponse.md) | :heavy_minus_sign:                                                                         | SalesReceipts                                                                              |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |