# IssueTrackingCollectionUsersOneResponse


## Supported Types

### `components.GetCollectionUserResponse`

```typescript
const value: components.GetCollectionUserResponse = {
  statusCode: 200,
  status: "OK",
  service: "jira",
  resource: "Tickets",
  operation: "one",
  data: {
    id: "12345",
    name: "Elon Musk",
    firstName: "Elon",
    lastName: "Musk",
    email: "elon@musk.com",
    photoUrl: "https://unavatar.io/elon-musk",
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

