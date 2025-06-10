# FileStorageDrivesAllResponse

## Example Usage

```typescript
import { FileStorageDrivesAllResponse } from "@apideck/unify/models/operations";

let value: FileStorageDrivesAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getDrivesResponse`                                                                      | [components.GetDrivesResponse](../../models/components/getdrivesresponse.md)             | :heavy_minus_sign:                                                                       | Drives                                                                                   |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |