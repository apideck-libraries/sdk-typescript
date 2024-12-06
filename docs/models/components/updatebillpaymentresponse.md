# UpdateBillPaymentResponse

Bill Payment updated

## Example Usage

```typescript
import { UpdateBillPaymentResponse } from "@apideck/unify/models/components";

let value: UpdateBillPaymentResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "payments",
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
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | xero                                                         |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | payments                                                     |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | update                                                       |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |