# AtsJobsAllResponse

## Example Usage

```typescript
import { AtsJobsAllResponse } from "@apideck/unify/models/operations";

let value: AtsJobsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getJobsResponse`                                                                        | [components.GetJobsResponse](../../models/components/getjobsresponse.md)                 | :heavy_minus_sign:                                                                       | Jobs                                                                                     |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |