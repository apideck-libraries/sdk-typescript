# CreateInvoiceResponse

Invoice created

## Example Usage

```typescript
import { CreateInvoiceResponse } from "apideck/models/components";

let value: CreateInvoiceResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "invoices",
  operation: "add",
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
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Operation performed                                                      | add                                                                      |
| `data`                                                                   | [components.InvoiceResponse](../../models/components/invoiceresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |