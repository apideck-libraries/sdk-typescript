# HrisPayrollsAllResponse

## Example Usage

```typescript
import { HrisPayrollsAllResponse } from "@apideck/unify/models/operations";

let value: HrisPayrollsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getPayrollsResponse`                                                                    | [components.GetPayrollsResponse](../../models/components/getpayrollsresponse.md)         | :heavy_minus_sign:                                                                       | Payrolls                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |