# AccountingSalesReceiptsDeleteResponse

## Example Usage

```typescript
import { AccountingSalesReceiptsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingSalesReceiptsDeleteResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deleteSalesReceiptResponse`                                                                   | [components.DeleteSalesReceiptResponse](../../models/components/deletesalesreceiptresponse.md) | :heavy_minus_sign:                                                                             | SalesReceipt deleted                                                                           |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |