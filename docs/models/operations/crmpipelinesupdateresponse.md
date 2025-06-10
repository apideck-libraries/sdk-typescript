# CrmPipelinesUpdateResponse

## Example Usage

```typescript
import { CrmPipelinesUpdateResponse } from "@apideck/unify/models/operations";

let value: CrmPipelinesUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatePipelineResponse`                                                                 | [components.UpdatePipelineResponse](../../models/components/updatepipelineresponse.md)   | :heavy_minus_sign:                                                                       | Pipeline updated                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |