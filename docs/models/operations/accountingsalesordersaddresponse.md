# AccountingSalesOrdersAddResponse

## Example Usage

```typescript
import { AccountingSalesOrdersAddResponse } from "@apideck/unify/models/operations";

let value: AccountingSalesOrdersAddResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createSalesOrderResponse`                                                                 | [components.CreateSalesOrderResponse](../../models/components/createsalesorderresponse.md) | :heavy_minus_sign:                                                                         | Sales Orders                                                                               |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |