# EcommerceOrdersOneResponse

## Example Usage

```typescript
import { EcommerceOrdersOneResponse } from "@apideck/unify/models/operations";

let value: EcommerceOrdersOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getEcommerceOrderResponse: {
    statusCode: 200,
    status: "OK",
    service: "shopify",
    resource: "orders",
    operation: "one",
    data: {
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
      refunds: [
        {
          id: "12345",
          amount: "100",
          currency: "USD",
          reason: "Customer requested a refund",
          createdAt: new Date("2020-09-30T07:43:32.000Z"),
        },
      ],
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getEcommerceOrderResponse`                                                                  | [components.GetEcommerceOrderResponse](../../models/components/getecommerceorderresponse.md) | :heavy_minus_sign:                                                                           | Orders                                                                                       |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |