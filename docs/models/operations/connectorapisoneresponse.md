# ConnectorApisOneResponse


## Supported Types

### `components.GetApiResponse`

```typescript
const value: components.GetApiResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "file-storage",
    name: "File Storage API",
    description:
      "Manage API keys, access tokens, OAuth flows and integrations.",
    specUrl: "https://specs.apideck.com/file-storage.yml",
    apiReferenceUrl:
      "https://developers.apideck.com/apis/file-storage/reference",
    postmanCollectionId: "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
    categories: [
      "files",
      "file-storage",
      "cloud-storage",
      "object-storage",
    ],
    resources: [
      {
        id: "companies",
        name: "Companies",
        excludedFromCoverage: false,
      },
    ],
    events: [
      "crm.contact.updated",
      "accounting.invoice.created",
    ],
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

