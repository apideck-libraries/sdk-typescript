# FileStorageDriveGroupsUpdateResponse

## Example Usage

```typescript
import { FileStorageDriveGroupsUpdateResponse } from "@apideck/unify/models/operations";

let value: FileStorageDriveGroupsUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateDriveGroupResponse: {
    statusCode: 200,
    status: "OK",
    service: "google-drive",
    resource: "DriveGroups",
    operation: "update",
    data: {
      id: "12345",
    },
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updateDriveGroupResponse`                                                                 | [components.UpdateDriveGroupResponse](../../models/components/updatedrivegroupresponse.md) | :heavy_minus_sign:                                                                         | DriveGroups                                                                                |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |