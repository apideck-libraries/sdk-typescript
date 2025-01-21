# DeletePurchaseOrderResponse

PurchaseOrders

## Example Usage

```typescript
import { DeletePurchaseOrderResponse } from "@apideck/unify/models/components";

let value: DeletePurchaseOrderResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "PurchaseOrders",
  operation: "delete",
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
| `resource`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | Unified API resource name                                                                       | PurchaseOrders                                                                                  |
| `operation`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Operation performed                                                                             | delete                                                                                          |
| `data`                                                                                          | [components.UnifiedId](../../models/components/unifiedid.md)                                    | :heavy_check_mark:                                                                              | A object containing a unique identifier for the resource that was created, updated, or deleted. |                                                                                                 |