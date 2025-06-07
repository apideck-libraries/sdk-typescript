# AccountingBillsAllResponse

## Example Usage

```typescript
import { AccountingBillsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingBillsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getBillsResponse`                                                                       | [components.GetBillsResponse](../../models/components/getbillsresponse.md)               | :heavy_minus_sign:                                                                       | Bills                                                                                    |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |