# AccountingSuppliersUpdateResponse

## Example Usage

```typescript
import { AccountingSuppliersUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingSuppliersUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateSupplierResponse`                                                                 | [components.UpdateSupplierResponse](../../models/components/updatesupplierresponse.md)   | :heavy_minus_sign:                                                                       | Supplier updated                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |