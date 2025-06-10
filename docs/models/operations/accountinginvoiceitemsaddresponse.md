# AccountingInvoiceItemsAddResponse

## Example Usage

```typescript
import { AccountingInvoiceItemsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoiceItemsAddResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createInvoiceItemResponse`                                                                  | [components.CreateInvoiceItemResponse](../../models/components/createinvoiceitemresponse.md) | :heavy_minus_sign:                                                                           | InvoiceItems                                                                                 |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |