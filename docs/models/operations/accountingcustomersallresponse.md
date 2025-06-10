# AccountingCustomersAllResponse

## Example Usage

```typescript
import { AccountingCustomersAllResponse } from "@apideck/unify/models/operations";

let value: AccountingCustomersAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getCustomersResponse`                                                                   | [components.GetCustomersResponse](../../models/components/getcustomersresponse.md)       | :heavy_minus_sign:                                                                       | Customers                                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |