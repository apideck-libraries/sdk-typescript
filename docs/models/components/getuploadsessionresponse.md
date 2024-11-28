# GetUploadSessionResponse

UploadSessions

## Example Usage

```typescript
import { GetUploadSessionResponse } from "@apideck/unify/models/components";

let value: GetUploadSessionResponse = {
  statusCode: 200,
  status: "OK",
  service: "dropbox",
  resource: "UploadSessions",
  operation: "one",
  data: {
    id: "12345",
    success: true,
    partSize: 1000000,
    parallelUploadSupported: true,
    uploadedByteRange: "0-42",
    expiresAt: new Date("2022-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP Response Status Code                                            | 200                                                                  |
| `status`                                                             | *string*                                                             | :heavy_check_mark:                                                   | HTTP Response Status                                                 | OK                                                                   |
| `service`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Apideck ID of service provider                                       | dropbox                                                              |
| `resource`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Unified API resource name                                            | UploadSessions                                                       |
| `operation`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Operation performed                                                  | one                                                                  |
| `data`                                                               | [components.UploadSession](../../models/components/uploadsession.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |