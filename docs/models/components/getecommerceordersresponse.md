# GetEcommerceOrdersResponse

Orders

## Example Usage

```typescript
import { GetEcommerceOrdersResponse } from "@apideck/unify/models/components";

let value: GetEcommerceOrdersResponse = {
  statusCode: 200,
  status: "OK",
  service: "shopify",
  resource: "orders",
  operation: "all",
  data: [
    {
      id: "12345",
      orderNumber: "123456789",
      currency: "USD",
      discounts: [
        {
          code: "SUMMER20",
          amount: "5.99",
          percentage: "0.1",
        },
      ],
      subTotal: "45.17",
      shippingCost: "5.17",
      couponDiscount: "5.5",
      totalDiscount: "5.5",
      totalTax: "5.16",
      totalAmount: "50.17",
      refundedAmount: "5.5",
      status: "active",
      paymentStatus: "paid",
      fulfillmentStatus: "shipped",
      paymentMethod: "credit_card",
      customer: {
        id: "12345",
        name: "John Doe",
        firstName: "John",
        lastName: "Doe",
        companyName: "Acme Inc.",
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
        emails: [
          {
            id: "123",
            email: "elon@musk.com",
            type: "primary",
          },
        ],
      },
      billingAddress: {
        line1: "123 Main Street",
        line2: "Apt 1",
        companyName: "Acme Inc.",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        country: "US",
      },
      shippingAddress: {
        line1: "123 Main Street",
        line2: "Apt 1",
        companyName: "Acme Inc.",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        country: "US",
      },
      tracking: [
        {
          provider: "UPS",
          number: "1Z9999999999999999",
          url: "https://www.ups.com/track?tracknum=1Z9999999999999999",
          updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        },
      ],
      lineItems: [
        {
          id: "12345",
          productId: "def456",
          variantId: "ghi789",
          sku: "MBP123-16GB-SILVER-13",
          name: "Midnight 16inch MacBook Pro",
          description:
            "Powerful and portable, the MacBook Pro is perfect for professionals and creatives.",
          options: [
            {
              id: "jkl012",
              name: "Color",
              value: "Silver",
            },
          ],
          quantity: "2",
          unitPrice: "19.99",
          taxRate: "0.08",
          taxAmount: "1.6",
          isRefunded: false,
          refundedAmount: "0",
          refundedQuantity: "0",
          subTotal: "43.18",
          totalAmount: "43.18",
          discounts: [
            {
              code: "SUMMER20",
              amount: "5.99",
              percentage: "0.1",
            },
          ],
        },
      ],
      note: "Special instructions for delivery",
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status Code                                                | 200                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status                                                     | OK                                                                       |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Apideck ID of service provider                                           | shopify                                                                  |
| `resource`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Unified API resource name                                                | orders                                                                   |
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Operation performed                                                      | all                                                                      |
| `data`                                                                   | [components.EcommerceOrder](../../models/components/ecommerceorder.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `raw`                                                                    | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | Raw response from the integration when raw=true query param is provided  |                                                                          |
| `meta`                                                                   | [components.Meta](../../models/components/meta.md)                       | :heavy_minus_sign:                                                       | Response metadata                                                        |                                                                          |
| `links`                                                                  | [components.Links](../../models/components/links.md)                     | :heavy_minus_sign:                                                       | Links to navigate to previous or next pages through the API              |                                                                          |