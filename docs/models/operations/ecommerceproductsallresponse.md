# EcommerceProductsAllResponse


## Supported Types

### `components.GetProductsResponse`

```typescript
const value: components.GetProductsResponse = {
  statusCode: 200,
  status: "OK",
  service: "shopify",
  resource: "products",
  operation: "all",
  data: [
    {
      id: "12345",
      name: "MacBook Pro",
      description:
        "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
      status: "active",
      price: "1999.99",
      sku: "MBP123",
      inventoryQuantity: "10",
      images: [
        {
          id: "12345",
          url: "https://example.com/macbook-pro.jpg",
        },
      ],
      weight: "1.25",
      weightUnit: "lb",
      options: [
        {
          id: "1",
          name: "Color",
          values: [
            "Red",
          ],
        },
      ],
      variants: [
        {
          id: "1",
          name: "Midnight 16inch MacBook Pro",
          price: "1999.99",
          sku: "MBP123-16GB-SILVER-13",
          inventoryQuantity: "5",
          weight: "1.25",
          weightUnit: "lb",
          options: [
            {
              id: "1",
              name: "Color",
              value: "Silver",
            },
          ],
          images: [
            {
              id: "12345",
              url: "https://example.com/macbook-pro.jpg",
            },
          ],
        },
      ],
      tags: [
        "Apple",
      ],
      categories: [
        {
          id: "12345",
          name: "Laptops",
        },
      ],
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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

