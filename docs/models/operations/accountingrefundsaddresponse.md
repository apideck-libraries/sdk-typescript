# AccountingRefundsAddResponse

## Example Usage

```typescript
import { AccountingRefundsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingRefundsAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createRefundResponse`                                                                   | [components.CreateRefundResponse](../../models/components/createrefundresponse.md)       | :heavy_minus_sign:                                                                       | Refund created                                                                           |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |