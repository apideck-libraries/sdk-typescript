# GetConsumersResponse

Consumers

## Example Usage

```typescript
import { GetConsumersResponse } from "@apideck/unify/models/components";

let value: GetConsumersResponse = {
  statusCode: 200,
  status: "OK",
  data: [
    {
      consumerId: "test_consumer_id",
      applicationId: "1111",
      metadata: {
        accountName: "SpaceX",
        userName: "Elon Musk",
        email: "elon@musk.com",
        image: "https://www.spacex.com/static/images/share.jpg",
      },
      aggregatedRequestCount: 101,
      requestCounts: {
        unify: 100,
        proxy: 10,
        vault: 21,
      },
      created: "2021-05-07T12:55:42.242Z",
      modified: "2021-05-07T12:55:42.242Z",
      requestCountUpdated: "2021-05-07T12:55:42.242Z",
      services: [
        "salesforce",
        "stripe",
      ],
    },
  ],
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

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP Response Status Code                                   | 200                                                         |
| `status`                                                    | *string*                                                    | :heavy_check_mark:                                          | HTTP Response Status                                        | OK                                                          |
| `data`                                                      | [components.Data](../../models/components/data.md)[]        | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `meta`                                                      | [components.Meta](../../models/components/meta.md)          | :heavy_minus_sign:                                          | Response metadata                                           |                                                             |
| `links`                                                     | [components.Links](../../models/components/links.md)        | :heavy_minus_sign:                                          | Links to navigate to previous or next pages through the API |                                                             |