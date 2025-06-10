# AccountingInvoicesAddResponse

## Example Usage

```typescript
import { AccountingInvoicesAddResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoicesAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createInvoiceResponse`                                                                  | [components.CreateInvoiceResponse](../../models/components/createinvoiceresponse.md)     | :heavy_minus_sign:                                                                       | Invoice created                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |