# GetJournalsResponse

Journals

## Example Usage

```typescript
import { GetJournalsResponse } from "@apideck/unify/models/components";

let value: GetJournalsResponse = {
  statusCode: 200,
  status: "OK",
  service: "exact-online",
  resource: "journals",
  operation: "all",
  data: [
    {
      id: "12345",
      code: "90",
      name: "General journal",
      description: "General journal",
      type: "general",
      allowVat: true,
      currency: "USD",
      iban: "GB33BUKB20201555555555",
      defaultAccount: null,
      blocked: false,
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    },
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
    totalCount: 1,
    warnings: [
      {
        type: "downstream_request_failed",
        statusCode: 429,
        operation: "getManager",
      },
    ],
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
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | exact-online                                                            |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | journals                                                                |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | all                                                                     |
| `data`                                                                  | [components.Journal](../../models/components/journal.md)[]              | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `links`                                                                 | [components.Links](../../models/components/links.md)                    | :heavy_minus_sign:                                                      | Links to navigate to previous or next pages through the API             |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |