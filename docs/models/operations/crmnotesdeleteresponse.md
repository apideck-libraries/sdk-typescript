# CrmNotesDeleteResponse

## Example Usage

```typescript
import { CrmNotesDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmNotesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteNoteResponse`                                                                     | [components.DeleteNoteResponse](../../models/components/deletenoteresponse.md)           | :heavy_minus_sign:                                                                       | Note deleted                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |