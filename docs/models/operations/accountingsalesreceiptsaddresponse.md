# AccountingSalesReceiptsAddResponse

## Example Usage

```typescript
import { AccountingSalesReceiptsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingSalesReceiptsAddResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createSalesReceiptResponse`                                                                   | [components.CreateSalesReceiptResponse](../../models/components/createsalesreceiptresponse.md) | :heavy_minus_sign:                                                                             | SalesReceipt created                                                                           |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |