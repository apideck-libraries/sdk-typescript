# ApideckOrders
(*pos.orders*)

## Overview

### Available Operations

* [list](#list) - List Orders
* [create](#create) - Create Order
* [get](#get) - Get Order
* [update](#update) - Update Order
* [delete](#delete) - Delete Order
* [pay](#pay) - Pay Order

## list

List Orders

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.orders.list({
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posOrdersList } from "apideck/funcs/posOrdersList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posOrdersList(apideck, {
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosOrdersAllRequest](../../models/operations/posordersallrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrdersAllResponse](../../models/operations/posordersallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## create

Create Order

### Example Usage

```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.orders.create({
    serviceId: "salesforce",
    order: {
      idempotencyKey: "random_string",
      orderNumber: "1F",
      orderDate: new RFCDate("2022-08-12"),
      closedDate: new RFCDate("2022-08-13"),
      referenceId: "my-order-001",
      status: "open",
      paymentStatus: "open",
      currency: "USD",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      orderTypeId: "12345",
      table: "1F",
      seat: "23F",
      totalAmount: 275,
      totalTip: 700,
      totalTax: 275,
      totalDiscount: 300,
      totalRefund: 0,
      totalServiceCharge: 0,
      refunded: false,
      customers: [
        {
          id: "12345",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          phoneNumbers: [
            {
              id: "12345",
              countryCode: "1",
              areaCode: "323",
              number: "111-111-1111",
              extension: "105",
              type: "primary",
            },
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
      ],
      fulfillments: [
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
      ],
      lineItems: [
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
      ],
      payments: [
        {
          amount: 27500,
          currency: "USD",
        },
        {
          amount: 27500,
          currency: "USD",
        },
        {
          amount: 27500,
          currency: "USD",
        },
      ],
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      refunds: [
        {
          amount: 27500,
          currency: "USD",
          reason: "The reason for the refund being issued.",
        },
      ],
      taxes: [
        {
          id: "state-sales-tax",
          name: "State Sales Tax",
          amount: 27500,
          currency: "USD",
          percentage: 15,
          autoApplied: true,
        },
      ],
      discounts: [
        {
          name: "10% off",
          type: "percentage",
          amount: 27500,
          currency: "USD",
          scope: "order",
        },
      ],
      tenders: [
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
      ],
      voided: false,
      version: "230320320320",
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posOrdersCreate } from "apideck/funcs/posOrdersCreate.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posOrdersCreate(apideck, {
    serviceId: "salesforce",
    order: {
      idempotencyKey: "random_string",
      orderNumber: "1F",
      orderDate: new RFCDate("2022-08-12"),
      closedDate: new RFCDate("2022-08-13"),
      referenceId: "my-order-001",
      status: "open",
      paymentStatus: "open",
      currency: "USD",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      orderTypeId: "12345",
      table: "1F",
      seat: "23F",
      totalAmount: 275,
      totalTip: 700,
      totalTax: 275,
      totalDiscount: 300,
      totalRefund: 0,
      totalServiceCharge: 0,
      refunded: false,
      customers: [
        {
          id: "12345",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          phoneNumbers: [
            {
              id: "12345",
              countryCode: "1",
              areaCode: "323",
              number: "111-111-1111",
              extension: "105",
              type: "primary",
            },
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
      ],
      fulfillments: [
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
      ],
      lineItems: [
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
      ],
      payments: [
        {
          amount: 27500,
          currency: "USD",
        },
        {
          amount: 27500,
          currency: "USD",
        },
        {
          amount: 27500,
          currency: "USD",
        },
      ],
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      refunds: [
        {
          amount: 27500,
          currency: "USD",
          reason: "The reason for the refund being issued.",
        },
      ],
      taxes: [
        {
          id: "state-sales-tax",
          name: "State Sales Tax",
          amount: 27500,
          currency: "USD",
          percentage: 15,
          autoApplied: true,
        },
      ],
      discounts: [
        {
          name: "10% off",
          type: "percentage",
          amount: 27500,
          currency: "USD",
          scope: "order",
        },
      ],
      tenders: [
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
      ],
      voided: false,
      version: "230320320320",
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosOrdersAddRequest](../../models/operations/posordersaddrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrdersAddResponse](../../models/operations/posordersaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## get

Get Order

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.orders.get({
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posOrdersGet } from "apideck/funcs/posOrdersGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posOrdersGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosOrdersOneRequest](../../models/operations/posordersonerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrdersOneResponse](../../models/operations/posordersoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## update

Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).


### Example Usage

```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.orders.update({
    id: "<id>",
    serviceId: "salesforce",
    order: {
      idempotencyKey: "random_string",
      orderNumber: "1F",
      orderDate: new RFCDate("2022-08-12"),
      closedDate: new RFCDate("2022-08-13"),
      referenceId: "my-order-001",
      status: "open",
      paymentStatus: "open",
      currency: "USD",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      orderTypeId: "12345",
      table: "1F",
      seat: "23F",
      totalAmount: 275,
      totalTip: 700,
      totalTax: 275,
      totalDiscount: 300,
      totalRefund: 0,
      totalServiceCharge: 0,
      refunded: false,
      customers: [
        {
          id: "12345",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
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
            {
              id: "123",
              email: "elon@musk.com",
              type: "primary",
            },
            {
              id: "123",
              email: "elon@musk.com",
              type: "primary",
            },
          ],
        },
      ],
      fulfillments: [
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
      ],
      lineItems: [
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
      ],
      payments: [
        {
          amount: 27500,
          currency: "USD",
        },
        {
          amount: 27500,
          currency: "USD",
        },
      ],
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      refunds: [
        {
          amount: 27500,
          currency: "USD",
          reason: "The reason for the refund being issued.",
        },
      ],
      taxes: [
        {
          id: "state-sales-tax",
          name: "State Sales Tax",
          amount: 27500,
          currency: "USD",
          percentage: 15,
          autoApplied: true,
        },
      ],
      discounts: [
        {
          name: "10% off",
          type: "percentage",
          amount: 27500,
          currency: "USD",
          scope: "order",
        },
      ],
      tenders: [
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
      ],
      voided: false,
      version: "230320320320",
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posOrdersUpdate } from "apideck/funcs/posOrdersUpdate.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posOrdersUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    order: {
      idempotencyKey: "random_string",
      orderNumber: "1F",
      orderDate: new RFCDate("2022-08-12"),
      closedDate: new RFCDate("2022-08-13"),
      referenceId: "my-order-001",
      status: "open",
      paymentStatus: "open",
      currency: "USD",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      orderTypeId: "12345",
      table: "1F",
      seat: "23F",
      totalAmount: 275,
      totalTip: 700,
      totalTax: 275,
      totalDiscount: 300,
      totalRefund: 0,
      totalServiceCharge: 0,
      refunded: false,
      customers: [
        {
          id: "12345",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
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
            {
              id: "123",
              email: "elon@musk.com",
              type: "primary",
            },
            {
              id: "123",
              email: "elon@musk.com",
              type: "primary",
            },
          ],
        },
      ],
      fulfillments: [
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
      ],
      lineItems: [
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
      ],
      payments: [
        {
          amount: 27500,
          currency: "USD",
        },
        {
          amount: 27500,
          currency: "USD",
        },
      ],
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      refunds: [
        {
          amount: 27500,
          currency: "USD",
          reason: "The reason for the refund being issued.",
        },
      ],
      taxes: [
        {
          id: "state-sales-tax",
          name: "State Sales Tax",
          amount: 27500,
          currency: "USD",
          percentage: 15,
          autoApplied: true,
        },
      ],
      discounts: [
        {
          name: "10% off",
          type: "percentage",
          amount: 27500,
          currency: "USD",
          scope: "order",
        },
      ],
      tenders: [
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 27.5,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
      ],
      voided: false,
      version: "230320320320",
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosOrdersUpdateRequest](../../models/operations/posordersupdaterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrdersUpdateResponse](../../models/operations/posordersupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## delete

Delete Order

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.orders.delete({
    id: "<id>",
    serviceId: "salesforce",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posOrdersDelete } from "apideck/funcs/posOrdersDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posOrdersDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosOrdersDeleteRequest](../../models/operations/posordersdeleterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrdersDeleteResponse](../../models/operations/posordersdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## pay

Pay Order

### Example Usage

```typescript
import { Apideck } from "apideck";
import { RFCDate } from "apideck/types";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.orders.pay({
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
    order: {
      idempotencyKey: "random_string",
      orderNumber: "1F",
      orderDate: new RFCDate("2022-08-12"),
      closedDate: new RFCDate("2022-08-13"),
      referenceId: "my-order-001",
      status: "open",
      paymentStatus: "open",
      currency: "USD",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      orderTypeId: "12345",
      table: "1F",
      seat: "23F",
      totalAmount: 275,
      totalTip: 700,
      totalTax: 275,
      totalDiscount: 300,
      totalRefund: 0,
      totalServiceCharge: 0,
      refunded: false,
      customers: [
        {
          id: "12345",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          phoneNumbers: [
            {
              id: "12345",
              countryCode: "1",
              areaCode: "323",
              number: "111-111-1111",
              extension: "105",
              type: "primary",
            },
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
            {
              id: "123",
              email: "elon@musk.com",
              type: "primary",
            },
          ],
        },
      ],
      fulfillments: [
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
      ],
      lineItems: [
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
      ],
      payments: [
        {
          amount: 27500,
          currency: "USD",
        },
      ],
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      refunds: [
        {
          amount: 27500,
          currency: "USD",
          reason: "The reason for the refund being issued.",
        },
      ],
      taxes: [
        {
          id: "state-sales-tax",
          name: "State Sales Tax",
          amount: 27500,
          currency: "USD",
          percentage: 15,
          autoApplied: true,
        },
      ],
      discounts: [
        {
          name: "10% off",
          type: "percentage",
          amount: 27500,
          currency: "USD",
          scope: "order",
        },
      ],
      tenders: [
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 275,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
      ],
      voided: false,
      version: "230320320320",
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posOrdersPay } from "apideck/funcs/posOrdersPay.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posOrdersPay(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
    order: {
      idempotencyKey: "random_string",
      orderNumber: "1F",
      orderDate: new RFCDate("2022-08-12"),
      closedDate: new RFCDate("2022-08-13"),
      referenceId: "my-order-001",
      status: "open",
      paymentStatus: "open",
      currency: "USD",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      orderTypeId: "12345",
      table: "1F",
      seat: "23F",
      totalAmount: 275,
      totalTip: 700,
      totalTax: 275,
      totalDiscount: 300,
      totalRefund: 0,
      totalServiceCharge: 0,
      refunded: false,
      customers: [
        {
          id: "12345",
          firstName: "Elon",
          middleName: "D.",
          lastName: "Musk",
          phoneNumbers: [
            {
              id: "12345",
              countryCode: "1",
              areaCode: "323",
              number: "111-111-1111",
              extension: "105",
              type: "primary",
            },
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
            {
              id: "123",
              email: "elon@musk.com",
              type: "primary",
            },
          ],
        },
      ],
      fulfillments: [
        {
          id: "12345",
          type: "shipment",
          pickupDetails: {
            autoCompleteDuration: "P1W3D",
            cancelReason: "Not hungry",
            expiresAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupAt: new Date("2016-09-04T23:59:33.123Z"),
            pickupWindowDuration: "P1W3D",
            prepTimeDuration: "P1W3D",
            note: "Pickup in the back.",
            placedAt: new Date("2016-09-04T23:59:33.123Z"),
            rejectedAt: new Date("2016-09-04T23:59:33.123Z"),
            readyAt: new Date("2016-09-04T23:59:33.123Z"),
            expiredAt: new Date("2016-09-04T23:59:33.123Z"),
            pickedUpAt: new Date("2016-09-04T23:59:33.123Z"),
            canceledAt: new Date("2016-09-04T23:59:33.123Z"),
            curbsidePickupDetails: {
              buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
            },
            recipient: {
              customerId: "12345",
              displayName: "Elon Musk",
              address: {
                id: "123",
                type: "primary",
                string: "25 Spring Street, Blackburn, VIC 3130",
                name: "HQ US",
                line1: "Main street",
                line2: "apt #",
                line3: "Suite #",
                line4: "delivery instructions",
                streetNumber: "25",
                city: "San Francisco",
                state: "CA",
                postalCode: "94104",
                country: "US",
                latitude: "40.759211",
                longitude: "-73.984638",
                county: "Santa Clara",
                contactName: "Elon Musk",
                salutation: "Mr",
                phoneNumber: "111-111-1111",
                fax: "122-111-1111",
                email: "elon@musk.com",
                website: "https://elonmusk.com",
                notes: "Address notes or delivery instructions.",
                rowVersion: "1-12345",
              },
              phoneNumber: {
                id: "12345",
                countryCode: "1",
                areaCode: "323",
                number: "111-111-1111",
                extension: "105",
                type: "primary",
              },
              email: {
                id: "123",
                email: "elon@musk.com",
                type: "primary",
              },
            },
          },
        },
      ],
      lineItems: [
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
        {
          name: "New York Strip Steak",
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              discountId: "12345",
              amount: 27500,
              currency: "USD",
            },
          ],
          modifiers: [
            {
              id: "12345",
              name: "New York Strip Steak - no cheese",
              amount: 27500,
              currency: "USD",
              alternateName: "Modifier New",
              modifierGroupId: "123",
            },
          ],
        },
      ],
      payments: [
        {
          amount: 27500,
          currency: "USD",
        },
      ],
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      refunds: [
        {
          amount: 27500,
          currency: "USD",
          reason: "The reason for the refund being issued.",
        },
      ],
      taxes: [
        {
          id: "state-sales-tax",
          name: "State Sales Tax",
          amount: 27500,
          currency: "USD",
          percentage: 15,
          autoApplied: true,
        },
      ],
      discounts: [
        {
          name: "10% off",
          type: "percentage",
          amount: 27500,
          currency: "USD",
          scope: "order",
        },
      ],
      tenders: [
        {
          name: "10% off",
          type: "cash",
          note: "An optional note associated with the tender at the time of payment.",
          amount: 27500,
          percentage: 10,
          currency: "USD",
          totalAmount: 275,
          totalTip: 7,
          totalProcessingFee: 0,
          totalTax: 2.75,
          totalDiscount: 3,
          totalRefund: 0,
          totalServiceCharge: 0,
          buyerTenderedCashAmount: 27500,
          changeBackCashAmount: 27500,
          card: {
            bin: "41111",
            cardType: "credit",
            prepaidType: "prepaid",
            cardholderName: "John Doe",
            customerId: "12345",
            merchantId: "12345",
            expMonth: 1,
            expYear: 2022,
            fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
            last4: "The last 4 digits of the card number.",
            enabled: true,
            billingAddress: {
              id: "123",
              type: "primary",
              string: "25 Spring Street, Blackburn, VIC 3130",
              name: "HQ US",
              line1: "Main street",
              line2: "apt #",
              line3: "Suite #",
              line4: "delivery instructions",
              streetNumber: "25",
              city: "San Francisco",
              state: "CA",
              postalCode: "94104",
              country: "US",
              latitude: "40.759211",
              longitude: "-73.984638",
              county: "Santa Clara",
              contactName: "Elon Musk",
              salutation: "Mr",
              phoneNumber: "111-111-1111",
              fax: "122-111-1111",
              email: "elon@musk.com",
              website: "https://elonmusk.com",
              notes: "Address notes or delivery instructions.",
              rowVersion: "1-12345",
            },
            referenceId: "card-001",
            version: "230320320320",
          },
          cardStatus: "authorized",
          cardEntryMethod: "swiped",
        },
      ],
      voided: false,
      version: "230320320320",
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosOrdersPayRequest](../../models/operations/posorderspayrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrdersPayResponse](../../models/operations/posorderspayresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |