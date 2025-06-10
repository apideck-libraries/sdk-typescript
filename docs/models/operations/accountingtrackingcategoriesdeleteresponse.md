# AccountingTrackingCategoriesDeleteResponse

## Example Usage

```typescript
import { AccountingTrackingCategoriesDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingTrackingCategoriesDeleteResponse = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `deleteTrackingCategoryResponse`                                                                       | [components.DeleteTrackingCategoryResponse](../../models/components/deletetrackingcategoryresponse.md) | :heavy_minus_sign:                                                                                     | Tracking category deleted                                                                              |
| `unexpectedErrorResponse`                                                                              | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)               | :heavy_minus_sign:                                                                                     | Unexpected error                                                                                       |