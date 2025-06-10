# AccountingBillsDeleteResponse

## Example Usage

```typescript
import { AccountingBillsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingBillsDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteBillResponse`                                                                     | [components.DeleteBillResponse](../../models/components/deletebillresponse.md)           | :heavy_minus_sign:                                                                       | Bill deleted                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |