# FileStorageDriveGroupsDeleteResponse

## Example Usage

```typescript
import { FileStorageDriveGroupsDeleteResponse } from "@apideck/unify/models/operations";

let value: FileStorageDriveGroupsDeleteResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deleteDriveGroupResponse`                                                                 | [components.DeleteDriveGroupResponse](../../models/components/deletedrivegroupresponse.md) | :heavy_minus_sign:                                                                         | DriveGroups                                                                                |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |