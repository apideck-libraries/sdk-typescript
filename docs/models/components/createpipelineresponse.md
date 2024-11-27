# CreatePipelineResponse

Pipeline created

## Example Usage

```typescript
import { CreatePipelineResponse } from "@apideck/sdk/models/components";

let value: CreatePipelineResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "pipelines",
  operation: "add",
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
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | pipelines                                                    |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | add                                                          |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |