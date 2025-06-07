# IssueTrackingCollectionTagsAllResponse

## Example Usage

```typescript
import { IssueTrackingCollectionTagsAllResponse } from "@apideck/unify/models/operations";

let value: IssueTrackingCollectionTagsAllResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getCollectionTagsResponse`                                                                  | [components.GetCollectionTagsResponse](../../models/components/getcollectiontagsresponse.md) | :heavy_minus_sign:                                                                           | List Tags                                                                                    |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |