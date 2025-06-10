# GetPaymentsResponse

Payments

## Example Usage

```typescript
import { GetPaymentsResponse } from "@apideck/unify/models/components";

let value: GetPaymentsResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "payments",
  operation: "all",
  data: [],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | xero                                                                    |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | payments                                                                |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | all                                                                     |
| `data`                                                                  | [components.Payment](../../models/components/payment.md)[]              | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `links`                                                                 | [components.Links](../../models/components/links.md)                    | :heavy_minus_sign:                                                      | Links to navigate to previous or next pages through the API             |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |