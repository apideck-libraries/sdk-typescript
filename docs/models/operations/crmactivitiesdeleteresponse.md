# CrmActivitiesDeleteResponse

## Example Usage

```typescript
import { CrmActivitiesDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmActivitiesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteActivityResponse`                                                                 | [components.DeleteActivityResponse](../../models/components/deleteactivityresponse.md)   | :heavy_minus_sign:                                                                       | Activity deleted                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |