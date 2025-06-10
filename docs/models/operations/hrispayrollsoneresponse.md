# HrisPayrollsOneResponse

## Example Usage

```typescript
import { HrisPayrollsOneResponse } from "@apideck/unify/models/operations";

let value: HrisPayrollsOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getPayrollResponse`                                                                     | [components.GetPayrollResponse](../../models/components/getpayrollresponse.md)           | :heavy_minus_sign:                                                                       | Payrolls                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |