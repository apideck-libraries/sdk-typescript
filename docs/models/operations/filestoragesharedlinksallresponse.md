# FileStorageSharedLinksAllResponse


## Supported Types

### `components.GetSharedLinksResponse`

```typescript
const value: components.GetSharedLinksResponse = {
  statusCode: 200,
  status: "OK",
  service: "dropbox",
  resource: "Shared Links",
  operation: "all",
  data: [
    {
      url: "https://www.box.com/s/vspke7y05sb214wjokpk",
      downloadUrl:
        "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg",
      target: {
        id: "12345",
        name: "sample.jpg",
        type: "file",
      },
      scope: "company",
      expiresAt: new Date("2022-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

