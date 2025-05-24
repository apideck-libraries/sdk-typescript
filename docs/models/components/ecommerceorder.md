# EcommerceOrder

## Example Usage

```typescript
import { EcommerceOrder } from "@apideck/unify/models/components";

let value: EcommerceOrder = {
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
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |
| `orderNumber`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Order number, if any.                                                                                                              | 123456789                                                                                                                          |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `discounts`                                                                                                                        | [components.EcommerceDiscount](../../models/components/ecommercediscount.md)[]                                                     | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `subTotal`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Sub-total amount, normally before tax.                                                                                             | 45.17                                                                                                                              |
| `shippingCost`                                                                                                                     | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Shipping cost, if any.                                                                                                             | 5.17                                                                                                                               |
| `couponDiscount`                                                                                                                   | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Coupon discount, if any.                                                                                                           | 5.5                                                                                                                                |
| `totalDiscount`                                                                                                                    | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Total discount, if any.                                                                                                            | 5.5                                                                                                                                |
| `totalTax`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Total tax, if any.                                                                                                                 | 5.16                                                                                                                               |
| `totalAmount`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Total amount due.                                                                                                                  | 50.17                                                                                                                              |
| `refundedAmount`                                                                                                                   | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Refunded amount, if any.                                                                                                           | 5.5                                                                                                                                |
| `status`                                                                                                                           | [components.EcommerceOrderStatus](../../models/components/ecommerceorderstatus.md)                                                 | :heavy_minus_sign:                                                                                                                 | Current status of the order.                                                                                                       | active                                                                                                                             |
| `paymentStatus`                                                                                                                    | [components.EcommerceOrderPaymentStatus](../../models/components/ecommerceorderpaymentstatus.md)                                   | :heavy_minus_sign:                                                                                                                 | Current payment status of the order.                                                                                               | paid                                                                                                                               |
| `fulfillmentStatus`                                                                                                                | [components.FulfillmentStatus](../../models/components/fulfillmentstatus.md)                                                       | :heavy_minus_sign:                                                                                                                 | Current fulfillment status of the order.                                                                                           | shipped                                                                                                                            |
| `paymentMethod`                                                                                                                    | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Payment method used for this order.                                                                                                | credit_card                                                                                                                        |
| `customer`                                                                                                                         | [components.LinkedEcommerceCustomer](../../models/components/linkedecommercecustomer.md)                                           | :heavy_minus_sign:                                                                                                                 | The customer this entity is linked to.                                                                                             |                                                                                                                                    |
| `billingAddress`                                                                                                                   | [components.EcommerceAddress](../../models/components/ecommerceaddress.md)                                                         | :heavy_minus_sign:                                                                                                                 | An object representing a shipping or billing address.                                                                              |                                                                                                                                    |
| `shippingAddress`                                                                                                                  | [components.EcommerceAddress](../../models/components/ecommerceaddress.md)                                                         | :heavy_minus_sign:                                                                                                                 | An object representing a shipping or billing address.                                                                              |                                                                                                                                    |
| `tracking`                                                                                                                         | [components.TrackingItem](../../models/components/trackingitem.md)[]                                                               | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `lineItems`                                                                                                                        | [components.EcommerceOrderLineItem](../../models/components/ecommerceorderlineitem.md)[]                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `note`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Note for the order.                                                                                                                | Special instructions for delivery                                                                                                  |
| `refunds`                                                                                                                          | [components.EcommerceOrderRefund](../../models/components/ecommerceorderrefund.md)[]                                               | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `customMappings`                                                                                                                   | Record<string, *any*>                                                                                                              | :heavy_minus_sign:                                                                                                                 | When custom mappings are configured on the resource, the result is included here.                                                  |                                                                                                                                    |
| `createdAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when the object was created.                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                           |
| `updatedAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when the object was last updated.                                                                                | 2020-09-30T07:43:32.000Z                                                                                                           |