# AccountingRefundsUpdateResponse

## Example Usage

```typescript
import { AccountingRefundsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingRefundsUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateRefundResponse`                                                                   | [components.UpdateRefundResponse](../../models/components/updaterefundresponse.md)       | :heavy_minus_sign:                                                                       | Refund updated                                                                           |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |