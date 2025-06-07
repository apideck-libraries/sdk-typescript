# AccountingBillsAddResponse

## Example Usage

```typescript
import { AccountingBillsAddResponse } from "@apideck/unify/models/operations";

let value: AccountingBillsAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createBillResponse`                                                                     | [components.CreateBillResponse](../../models/components/createbillresponse.md)           | :heavy_minus_sign:                                                                       | Bill created                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |