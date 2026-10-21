# AccountingSalesOrdersAllResponse

## Example Usage

```typescript
import { AccountingSalesOrdersAllResponse } from "@apideck/unify/models/operations";

let value: AccountingSalesOrdersAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getSalesOrdersResponse`                                                                 | [components.GetSalesOrdersResponse](../../models/components/getsalesordersresponse.md)   | :heavy_minus_sign:                                                                       | Sales Orders                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |