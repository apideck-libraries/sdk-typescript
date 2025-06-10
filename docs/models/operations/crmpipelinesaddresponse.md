# CrmPipelinesAddResponse

## Example Usage

```typescript
import { CrmPipelinesAddResponse } from "@apideck/unify/models/operations";

let value: CrmPipelinesAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createPipelineResponse`                                                                 | [components.CreatePipelineResponse](../../models/components/createpipelineresponse.md)   | :heavy_minus_sign:                                                                       | Pipeline created                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |