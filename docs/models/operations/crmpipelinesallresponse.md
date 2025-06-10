# CrmPipelinesAllResponse

## Example Usage

```typescript
import { CrmPipelinesAllResponse } from "@apideck/unify/models/operations";

let value: CrmPipelinesAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getPipelinesResponse`                                                                   | [components.GetPipelinesResponse](../../models/components/getpipelinesresponse.md)       | :heavy_minus_sign:                                                                       | Pipelines                                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |