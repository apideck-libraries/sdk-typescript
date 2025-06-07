# FileStorageUploadSessionsDeleteResponse

## Example Usage

```typescript
import { FileStorageUploadSessionsDeleteResponse } from "@apideck/unify/models/operations";

let value: FileStorageUploadSessionsDeleteResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deleteUploadSessionResponse`                                                                    | [components.DeleteUploadSessionResponse](../../models/components/deleteuploadsessionresponse.md) | :heavy_minus_sign:                                                                               | UploadSessions                                                                                   |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |