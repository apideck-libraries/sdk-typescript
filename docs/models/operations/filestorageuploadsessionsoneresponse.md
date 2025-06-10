# FileStorageUploadSessionsOneResponse

## Example Usage

```typescript
import { FileStorageUploadSessionsOneResponse } from "@apideck/unify/models/operations";

let value: FileStorageUploadSessionsOneResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getUploadSessionResponse`                                                                 | [components.GetUploadSessionResponse](../../models/components/getuploadsessionresponse.md) | :heavy_minus_sign:                                                                         | UploadSessions                                                                             |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |