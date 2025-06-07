# AccountingInvoicesDeleteResponse

## Example Usage

```typescript
import { AccountingInvoicesDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoicesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteInvoiceResponse`                                                                  | [components.DeleteInvoiceResponse](../../models/components/deleteinvoiceresponse.md)     | :heavy_minus_sign:                                                                       | Invoice deleted                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |