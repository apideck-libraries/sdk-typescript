# CrmPipelinesDeleteResponse

## Example Usage

```typescript
import { CrmPipelinesDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmPipelinesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deletePipelineResponse`                                                                 | [components.DeletePipelineResponse](../../models/components/deletepipelineresponse.md)   | :heavy_minus_sign:                                                                       | Pipeline deleted                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |