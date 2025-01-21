# UpdateCommentResponse

Update a Comment

## Example Usage

```typescript
import { UpdateCommentResponse } from "@apideck/unify/models/components";

let value: UpdateCommentResponse = {
  statusCode: 200,
  status: "OK",
  service: "github",
  resource: "Tickets",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP Response Status Code                                                                       | 200                                                                                             |
| `status`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP Response Status                                                                            | OK                                                                                              |
| `service`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | Apideck ID of service provider                                                                  | github                                                                                          |
| `resource`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | Unified API resource name                                                                       | Tickets                                                                                         |
| `operation`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Operation performed                                                                             | update                                                                                          |
| `data`                                                                                          | [components.UnifiedId](../../models/components/unifiedid.md)                                    | :heavy_check_mark:                                                                              | A object containing a unique identifier for the resource that was created, updated, or deleted. |                                                                                                 |