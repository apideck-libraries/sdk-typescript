# IssueTrackingCollectionTicketsAllResponse


## Supported Types

### `components.GetTicketsResponse`

```typescript
const value: components.GetTicketsResponse = {
  statusCode: 200,
  status: "OK",
  service: "jira",
  resource: "Tickets",
  operation: "all",
  data: [
    {
      id: "12345",
      parentId: "12345",
      collectionId: "12345",
      type: "Technical",
      subject: "Technical Support Request",
      description: "I am facing issues with my internet connection",
      status: "open",
      priority: "high",
      assignees: [
        {
          id: "12345",
          username: "Cocoa",
        },
      ],
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      createdBy: "12345",
      dueDate: new Date("2020-09-30T07:43:32.000Z"),
      completedAt: new Date("2020-09-30T07:43:32.000Z"),
      tags: [
        {
          id: "12345",
          name: "User Experience",
        },
      ],
      passThrough: [
        {
          serviceId: "<id>",
          extendPaths: [
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
          ],
        },
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

