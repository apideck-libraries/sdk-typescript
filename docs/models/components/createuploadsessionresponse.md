# CreateUploadSessionResponse

UploadSessions

## Example Usage

```typescript
import { CreateUploadSessionResponse } from "apideck/models/components";

let value: CreateUploadSessionResponse = {
  statusCode: 200,
  status: "OK",
  service: "dropbox",
  resource: "UploadSessions",
  operation: "one",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | HTTP Response Status Code                                    | 200                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | HTTP Response Status                                         | OK                                                           |
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | dropbox                                                      |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | UploadSessions                                               |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | one                                                          |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |