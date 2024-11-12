# GetStoreResponse

Stores

## Example Usage

```typescript
import { GetStoreResponse } from "apideck/models/components";

let value: GetStoreResponse = {
  statusCode: 200,
  status: "OK",
  service: "shopify",
  resource: "stores",
  operation: "one",
  data: {
    id: "12345",
    name: "My Store",
    storeUrl: "https://mybrand.com/shop",
    adminUrl: "https://mybrand.com/admin",
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP Response Status Code                                              | 200                                                                    |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | HTTP Response Status                                                   | OK                                                                     |
| `service`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Apideck ID of service provider                                         | shopify                                                                |
| `resource`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Unified API resource name                                              | stores                                                                 |
| `operation`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Operation performed                                                    | one                                                                    |
| `data`                                                                 | [components.EcommerceStore](../../models/components/ecommercestore.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |