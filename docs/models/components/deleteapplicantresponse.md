# DeleteApplicantResponse

Applicants

## Example Usage

```typescript
import { DeleteApplicantResponse } from "@apideck/unify/models/components";

let value: DeleteApplicantResponse = {
  statusCode: 200,
  status: "OK",
  service: "lever",
  resource: "Applicants",
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
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | lever                                                        |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | Applicants                                                   |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | delete                                                       |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |