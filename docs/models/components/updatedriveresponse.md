# UpdateDriveResponse

Drives

## Example Usage

```typescript
import { UpdateDriveResponse } from "@apideck/sdk/models/components";

let value: UpdateDriveResponse = {
  statusCode: 200,
  status: "OK",
  service: "google-drive",
  resource: "Drives",
  operation: "update",
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
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | google-drive                                                 |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | Drives                                                       |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | update                                                       |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |