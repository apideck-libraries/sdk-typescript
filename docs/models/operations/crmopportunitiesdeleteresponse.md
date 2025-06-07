# CrmOpportunitiesDeleteResponse

## Example Usage

```typescript
import { CrmOpportunitiesDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmOpportunitiesDeleteResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deleteOpportunityResponse`                                                                  | [components.DeleteOpportunityResponse](../../models/components/deleteopportunityresponse.md) | :heavy_minus_sign:                                                                           | Opportunity deleted                                                                          |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |