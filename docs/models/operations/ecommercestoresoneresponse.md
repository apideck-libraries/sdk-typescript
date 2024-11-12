# EcommerceStoresOneResponse


## Supported Types

### `components.GetStoreResponse`

```typescript
const value: components.GetStoreResponse = {
  statusCode: 200,
  status: "OK",
  service: "shopify",
  resource: "stores",
  operation: "one",
  data: {
    id: "12345",
    name: "My Store",
    storeUrl: "https://mybrand.com/shop",
    adminUrl: "https://mybrand.com/admin",
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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

