# AccountingInvoicesAllResponse

## Example Usage

```typescript
import { AccountingInvoicesAllResponse } from "@apideck/unify/models/operations";

let value: AccountingInvoicesAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getInvoicesResponse`                                                                    | [components.GetInvoicesResponse](../../models/components/getinvoicesresponse.md)         | :heavy_minus_sign:                                                                       | Invoices                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |