# VaultConsumersAllResponse


## Supported Types

### `components.GetConsumersResponse`

```typescript
const value: components.GetConsumersResponse = {
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

### `components.UnexpectedErrorResponse`

```typescript
const value: components.UnexpectedErrorResponse = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

