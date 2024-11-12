# IssueTrackingCollectionsOneResponse


## Supported Types

### `components.GetCollectionResponse`

```typescript
const value: components.GetCollectionResponse = {
  statusCode: 200,
  status: "OK",
  service: "jira",
  resource: "Tickets",
  operation: "one",
  data: {
    id: "12345",
    parentId: "12345",
    type: "Technical",
    name: "Main IT Issues",
    description: "IT Issues",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

