# ConnectorConnectorResourcesOneResponse


## Supported Types

### `components.GetConnectorResourceResponse`

```typescript
const value: components.GetConnectorResourceResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "companies",
    name: "Companies",
    downstreamId: "accounts",
    downstreamName: "Accounts",
    pagination: {
      mode: "native",
    },
    supportedOperations: [
      "all",
      "one",
      "add",
      "update",
      "delete",
    ],
    downstreamUnsupportedOperations: [
      "upload",
    ],
    supportedFilters: [
      "name",
      "email",
    ],
    supportedSortBy: [
      "updated_at",
      "created_at",
      "name",
    ],
    supportedFields: [],
    supportedListFields: [],
  },
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

