# AccountingPaymentsAllResponse

## Example Usage

```typescript
import { AccountingPaymentsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingPaymentsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getPaymentsResponse`                                                                    | [components.GetPaymentsResponse](../../models/components/getpaymentsresponse.md)         | :heavy_minus_sign:                                                                       | Payments                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |