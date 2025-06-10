# FileStorageUploadSessionsAddResponse

## Example Usage

```typescript
import { FileStorageUploadSessionsAddResponse } from "@apideck/unify/models/operations";

let value: FileStorageUploadSessionsAddResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createUploadSessionResponse`                                                                    | [components.CreateUploadSessionResponse](../../models/components/createuploadsessionresponse.md) | :heavy_minus_sign:                                                                               | UploadSessions                                                                                   |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |