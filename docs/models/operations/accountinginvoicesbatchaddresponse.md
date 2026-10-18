# AccountingInvoicesBatchAddResponse

## Example Usage

```typescript
import { AccountingInvoicesBatchAddResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoicesBatchAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `batchInvoicesResponse`                                                                  | [components.BatchInvoicesResponse](../../models/components/batchinvoicesresponse.md)     | :heavy_minus_sign:                                                                       | Invoices batch processed                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |