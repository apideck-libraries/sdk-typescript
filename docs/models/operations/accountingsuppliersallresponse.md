# AccountingSuppliersAllResponse

## Example Usage

```typescript
import { AccountingSuppliersAllResponse } from "@apideck/unify/models/operations";

let value: AccountingSuppliersAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getSuppliersResponse`                                                                   | [components.GetSuppliersResponse](../../models/components/getsuppliersresponse.md)       | :heavy_minus_sign:                                                                       | Suppliers                                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |