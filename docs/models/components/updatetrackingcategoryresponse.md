# UpdateTrackingCategoryResponse

Tracking category updated

## Example Usage

```typescript
import { UpdateTrackingCategoryResponse } from "@apideck/unify/models/components";

let value: UpdateTrackingCategoryResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "tracking-categories",
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
| `service`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | Apideck ID of service provider                                                                  | quickbooks                                                                                      |
| `resource`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | Unified API resource name                                                                       | tracking-categories                                                                             |
| `operation`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Operation performed                                                                             | update                                                                                          |
| `data`                                                                                          | [components.UnifiedId](../../models/components/unifiedid.md)                                    | :heavy_check_mark:                                                                              | A object containing a unique identifier for the resource that was created, updated, or deleted. |                                                                                                 |
| `raw`                                                                                           | Record<string, *any*>                                                                           | :heavy_minus_sign:                                                                              | Raw response from the integration when raw=true query param is provided                         |                                                                                                 |