# BatchSuppliersResponse

Suppliers batch processed

## Example Usage

```typescript
import { BatchSuppliersResponse } from "@apideck/unify/models/components";

let value: BatchSuppliersResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "suppliers",
  operation: "add",
  data: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status Code                                                  | 200                                                                        |
| `status`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status                                                       | OK                                                                         |
| `service`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Apideck ID of service provider                                             | quickbooks                                                                 |
| `resource`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Unified API resource name                                                  | suppliers                                                                  |
| `operation`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Operation performed                                                        | add                                                                        |
| `data`                                                                     | [components.BatchItemResult](../../models/components/batchitemresult.md)[] | :heavy_check_mark:                                                         | One result per item in the request, in the order the items were sent.      |                                                                            |
| `raw`                                                                      | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | Raw response from the integration when raw=true query param is provided    |                                                                            |