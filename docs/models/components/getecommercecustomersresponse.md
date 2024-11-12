# GetEcommerceCustomersResponse

Customers

## Example Usage

```typescript
import { GetEcommerceCustomersResponse } from "apideck/models/components";

let value: GetEcommerceCustomersResponse = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status Code                                                      | 200                                                                            |
| `status`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status                                                           | OK                                                                             |
| `service`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Apideck ID of service provider                                                 | shopify                                                                        |
| `resource`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Unified API resource name                                                      | customers                                                                      |
| `operation`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Operation performed                                                            | all                                                                            |
| `data`                                                                         | [components.EcommerceCustomer](../../models/components/ecommercecustomer.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `meta`                                                                         | [components.Meta](../../models/components/meta.md)                             | :heavy_minus_sign:                                                             | Response metadata                                                              |                                                                                |
| `links`                                                                        | [components.Links](../../models/components/links.md)                           | :heavy_minus_sign:                                                             | Links to navigate to previous or next pages through the API                    |                                                                                |