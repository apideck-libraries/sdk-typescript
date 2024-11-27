# CreateOpportunityResponse

Opportunity created

## Example Usage

```typescript
import { CreateOpportunityResponse } from "@apideck/sdk/models/components";

let value: CreateOpportunityResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "opportunities",
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
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | opportunities                                                |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | add                                                          |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |