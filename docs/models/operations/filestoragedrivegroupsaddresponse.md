# FileStorageDriveGroupsAddResponse

## Example Usage

```typescript
import { FileStorageDriveGroupsAddResponse } from "@apideck/unify/models/operations";

let value: FileStorageDriveGroupsAddResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createDriveGroupResponse`                                                                 | [components.CreateDriveGroupResponse](../../models/components/createdrivegroupresponse.md) | :heavy_minus_sign:                                                                         | DriveGroups                                                                                |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |