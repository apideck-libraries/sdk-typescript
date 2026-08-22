# AccountingSalesReceiptsUpdateResponse

## Example Usage

```typescript
import { AccountingSalesReceiptsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingSalesReceiptsUpdateResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updateSalesReceiptResponse`                                                                   | [components.UpdateSalesReceiptResponse](../../models/components/updatesalesreceiptresponse.md) | :heavy_minus_sign:                                                                             | SalesReceipt updated                                                                           |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |