# AccountingInvoicesOneResponse

## Example Usage

```typescript
import { AccountingInvoicesOneResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoicesOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getInvoiceResponse`                                                                     | [components.GetInvoiceResponse](../../models/components/getinvoiceresponse.md)           | :heavy_minus_sign:                                                                       | Invoice                                                                                  |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |