# AccountingGoodsReceiptsAddResponse

## Example Usage

```typescript
import { AccountingGoodsReceiptsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingGoodsReceiptsAddResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createGoodsReceiptResponse`                                                                   | [components.CreateGoodsReceiptResponse](../../models/components/creategoodsreceiptresponse.md) | :heavy_minus_sign:                                                                             | Goods Receipt created                                                                          |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |