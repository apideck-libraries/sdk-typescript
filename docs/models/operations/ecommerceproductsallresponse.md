# EcommerceProductsAllResponse

## Example Usage

```typescript
import { EcommerceProductsAllResponse } from "@apideck/sdk/models/operations";

let value: EcommerceProductsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getProductsResponse: {
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getProductsResponse`                                                                    | [components.GetProductsResponse](../../models/components/getproductsresponse.md)         | :heavy_minus_sign:                                                                       | Products                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |