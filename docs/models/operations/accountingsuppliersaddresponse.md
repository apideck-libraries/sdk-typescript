# AccountingSuppliersAddResponse

## Example Usage

```typescript
import { AccountingSuppliersAddResponse } from "@apideck/unify/models/operations";

let value: AccountingSuppliersAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createSupplierResponse`                                                                 | [components.CreateSupplierResponse](../../models/components/createsupplierresponse.md)   | :heavy_minus_sign:                                                                       | Supplier created                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |