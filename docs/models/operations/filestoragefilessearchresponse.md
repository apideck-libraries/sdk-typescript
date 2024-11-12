# FileStorageFilesSearchResponse


## Supported Types

### `components.GetFilesResponse`

```typescript
const value: components.GetFilesResponse = {
  statusCode: 200,
  status: "OK",
  service: "google-drive",
  resource: "files",
  operation: "all",
  data: [
    {
      id: "12345",
      downstreamId: "12345",
      name: "sample.jpg",
      description: "A sample image",
      type: "file",
      path: "/Documents/sample.jpg",
      mimeType: "image/jpeg",
      size: 1810673,
      owner: {
        id: "12345",
        email: "hello@apideck.com",
        name: "Elon Musk",
      },
      parentFolders: [
        {
          id: "12345",
          name: "Personal",
        },
      ],
      exportFormats: [
        "application/pdf",
        "application/vnd.oasis.opendocument.presentation",
        "text/plain",
      ],
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

