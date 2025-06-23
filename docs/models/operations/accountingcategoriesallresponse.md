# AccountingCategoriesAllResponse

## Example Usage

```typescript
import { AccountingCategoriesAllResponse } from "@apideck/unify/models/operations";

let value: AccountingCategoriesAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getCategoriesResponse`                                                                  | [components.GetCategoriesResponse](../../models/components/getcategoriesresponse.md)     | :heavy_minus_sign:                                                                       | Categories                                                                               |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |