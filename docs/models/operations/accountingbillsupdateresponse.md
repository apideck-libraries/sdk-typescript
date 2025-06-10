# AccountingBillsUpdateResponse

## Example Usage

```typescript
import { AccountingBillsUpdateResponse } from "@apideck/unify/models/operations";

let value: AccountingBillsUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateBillResponse`                                                                     | [components.UpdateBillResponse](../../models/components/updatebillresponse.md)           | :heavy_minus_sign:                                                                       | Bill Updated                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |