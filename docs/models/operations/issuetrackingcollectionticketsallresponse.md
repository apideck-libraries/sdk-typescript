# IssueTrackingCollectionTicketsAllResponse

## Example Usage

```typescript
import { IssueTrackingCollectionTicketsAllResponse } from "@apideck/unify/models/operations";

let value: IssueTrackingCollectionTicketsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getTicketsResponse`                                                                     | [components.GetTicketsResponse](../../models/components/getticketsresponse.md)           | :heavy_minus_sign:                                                                       | List Tickets                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |