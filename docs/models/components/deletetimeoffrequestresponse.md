# DeleteTimeOffRequestResponse

TimeOffRequests

## Example Usage

```typescript
import { DeleteTimeOffRequestResponse } from "@apideck/sdk/models/components";

let value: DeleteTimeOffRequestResponse = {
  statusCode: 200,
  status: "OK",
  service: "bamboohr",
  resource: "time-off-requests",
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
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | bamboohr                                                     |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | time-off-requests                                            |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | delete                                                       |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |