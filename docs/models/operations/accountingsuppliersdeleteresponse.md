# AccountingSuppliersDeleteResponse

## Example Usage

```typescript
import { AccountingSuppliersDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingSuppliersDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteSupplierResponse`                                                                 | [components.DeleteSupplierResponse](../../models/components/deletesupplierresponse.md)   | :heavy_minus_sign:                                                                       | Supplier deleted                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |