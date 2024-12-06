# DeleteActivityResponse

Activity deleted

## Example Usage

```typescript
import { DeleteActivityResponse } from "@apideck/unify/models/components";

let value: DeleteActivityResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "activities",
  operation: "delete",
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
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | activities                                                   |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | delete                                                       |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |