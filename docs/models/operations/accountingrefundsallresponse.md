# AccountingRefundsAllResponse

## Example Usage

```typescript
import { AccountingRefundsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingRefundsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getRefundsResponse`                                                                     | [components.GetRefundsResponse](../../models/components/getrefundsresponse.md)           | :heavy_minus_sign:                                                                       | Refunds                                                                                  |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |