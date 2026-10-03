# AccountingTrackingCategoriesBatchAddResponse

## Example Usage

```typescript
import { AccountingTrackingCategoriesBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingTrackingCategoriesBatchAddResponse = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `batchTrackingCategoriesResponse`                                                                        | [components.BatchTrackingCategoriesResponse](../../models/components/batchtrackingcategoriesresponse.md) | :heavy_minus_sign:                                                                                       | Tracking Categories batch processed                                                                      |
| `unexpectedErrorResponse`                                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                 | :heavy_minus_sign:                                                                                       | Unexpected error                                                                                         |