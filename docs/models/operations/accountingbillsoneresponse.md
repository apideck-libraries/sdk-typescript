# AccountingBillsOneResponse

## Example Usage

```typescript
import { AccountingBillsOneResponse } from "@apideck/unify/models/operations";

let value: AccountingBillsOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getBillResponse`                                                                        | [components.GetBillResponse](../../models/components/getbillresponse.md)                 | :heavy_minus_sign:                                                                       | Bill                                                                                     |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |