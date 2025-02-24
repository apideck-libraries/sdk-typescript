# DeleteInvoiceResponse

Invoice deleted

## Example Usage

```typescript
import { DeleteInvoiceResponse } from "@apideck/unify/models/components";

let value: DeleteInvoiceResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "invoices",
  operation: "delete",
  data: {
    id: "12345",
    downstreamId: "12345",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status Code                                                | 200                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status                                                     | OK                                                                       |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Apideck ID of service provider                                           | xero                                                                     |
| `resource`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Unified API resource name                                                | invoices                                                                 |
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Operation performed                                                      | delete                                                                   |
| `data`                                                                   | [components.InvoiceResponse](../../models/components/invoiceresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `raw`                                                                    | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | Raw response from the integration when raw=true query param is provided  |                                                                          |