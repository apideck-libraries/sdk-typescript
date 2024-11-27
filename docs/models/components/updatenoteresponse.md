# UpdateNoteResponse

Note updated

## Example Usage

```typescript
import { UpdateNoteResponse } from "@apideck/sdk/models/components";

let value: UpdateNoteResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "notes",
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
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | zoho-crm                                                     |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | notes                                                        |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | update                                                       |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |