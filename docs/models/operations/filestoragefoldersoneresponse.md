# FileStorageFoldersOneResponse


## Supported Types

### `components.GetFolderResponse`

```typescript
const value: components.GetFolderResponse = {
  statusCode: 200,
  status: "OK",
  service: "undefined",
  resource: "Folders",
  operation: "one",
  data: {
    id: "12345",
    name: "Documents",
    description: "My Personal Documents",
    path: "/Personal/Documents",
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
    updatedBy: "12345",
    createdBy: "12345",
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

