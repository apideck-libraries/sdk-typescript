# EcommerceCustomersAllResponse

## Example Usage

```typescript
import { EcommerceCustomersAllResponse } from "apideck/models/operations";

let value: EcommerceCustomersAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getEcommerceCustomersResponse: {
    statusCode: 200,
    status: "OK",
    service: "shopify",
    resource: "customers",
    operation: "all",
    data: [
      {
        id: "12345",
        name: "John Doe",
        firstName: "John",
        lastName: "Doe",
        companyName: "Acme Inc.",
        status: "active",
        currency: "USD",
        emails: [
          {
            id: "123",
            email: "elon@musk.com",
            type: "primary",
          },
        ],
        phoneNumbers: [
          {
            id: "12345",
            countryCode: "1",
            areaCode: "323",
            number: "111-111-1111",
            extension: "105",
            type: "primary",
          },
        ],
        addresses: [
          {
            type: "billing",
            id: "12345",
            line1: "Main street",
            line2: "apt #",
            city: "Anytown",
            state: "Ohio",
            postalCode: "12345",
            country: "US",
          },
        ],
        orders: [
          {
            id: "12345",
            total: "199.99",
            status: "active",
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `getEcommerceCustomersResponse`                                                                      | [components.GetEcommerceCustomersResponse](../../models/components/getecommercecustomersresponse.md) | :heavy_minus_sign:                                                                                   | Customers                                                                                            |
| `unexpectedErrorResponse`                                                                            | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)             | :heavy_minus_sign:                                                                                   | Unexpected error                                                                                     |