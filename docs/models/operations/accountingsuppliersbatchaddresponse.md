# AccountingSuppliersBatchAddResponse

## Example Usage

```typescript
import { AccountingSuppliersBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingSuppliersBatchAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `batchSuppliersResponse`                                                                 | [components.BatchSuppliersResponse](../../models/components/batchsuppliersresponse.md)   | :heavy_minus_sign:                                                                       | Suppliers batch processed                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |