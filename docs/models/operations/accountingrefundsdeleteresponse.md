# AccountingRefundsDeleteResponse

## Example Usage

```typescript
import { AccountingRefundsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingRefundsDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteRefundResponse`                                                                   | [components.DeleteRefundResponse](../../models/components/deleterefundresponse.md)       | :heavy_minus_sign:                                                                       | Refund deleted                                                                           |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |