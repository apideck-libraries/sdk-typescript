# IssueTrackingCollectionsAllResponse

## Example Usage

```typescript
import { IssueTrackingCollectionsAllResponse } from "@apideck/unify/models/operations";

let value: IssueTrackingCollectionsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getCollectionsResponse`                                                                 | [components.GetCollectionsResponse](../../models/components/getcollectionsresponse.md)   | :heavy_minus_sign:                                                                       | List Collections                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |