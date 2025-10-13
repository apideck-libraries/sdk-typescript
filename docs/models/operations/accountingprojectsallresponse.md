# AccountingProjectsAllResponse

## Example Usage

```typescript
import { AccountingProjectsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingProjectsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getProjectsResponse`                                                                    | [components.GetProjectsResponse](../../models/components/getprojectsresponse.md)         | :heavy_minus_sign:                                                                       | Projects                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |