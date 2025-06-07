# AccountingInvoiceItemsAllResponse

## Example Usage

```typescript
import { AccountingInvoiceItemsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoiceItemsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getInvoiceItemsResponse`                                                                | [components.GetInvoiceItemsResponse](../../models/components/getinvoiceitemsresponse.md) | :heavy_minus_sign:                                                                       | InvoiceItems                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |