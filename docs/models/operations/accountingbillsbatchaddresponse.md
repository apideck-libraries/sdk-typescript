# AccountingBillsBatchAddResponse

## Example Usage

```typescript
import { AccountingBillsBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingBillsBatchAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `batchBillsResponse`                                                                     | [components.BatchBillsResponse](../../models/components/batchbillsresponse.md)           | :heavy_minus_sign:                                                                       | Bills batch processed                                                                    |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |