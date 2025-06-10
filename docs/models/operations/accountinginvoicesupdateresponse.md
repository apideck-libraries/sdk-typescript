# AccountingInvoicesUpdateResponse

## Example Usage

```typescript
import { AccountingInvoicesUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoicesUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateInvoiceResponse`                                                                  | [components.UpdateInvoiceResponse](../../models/components/updateinvoiceresponse.md)     | :heavy_minus_sign:                                                                       | Invoice updated                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |