# Pos
(*pos*)

## Overview

### Available Operations

* [posOrdersAll](#posordersall) - List Orders
* [posOrdersAdd](#posordersadd) - Create Order
* [posOrdersOne](#posordersone) - Get Order
* [posOrdersUpdate](#posordersupdate) - Update Order
* [posOrdersDelete](#posordersdelete) - Delete Order
* [posOrdersPay](#posorderspay) - Pay Order
* [posPaymentsAll](#pospaymentsall) - List Payments
* [posPaymentsAdd](#pospaymentsadd) - Create Payment
* [posPaymentsOne](#pospaymentsone) - Get Payment
* [posPaymentsUpdate](#pospaymentsupdate) - Update Payment
* [posPaymentsDelete](#pospaymentsdelete) - Delete Payment
* [posMerchantsAll](#posmerchantsall) - List Merchants
* [posMerchantsAdd](#posmerchantsadd) - Create Merchant
* [posMerchantsOne](#posmerchantsone) - Get Merchant
* [posMerchantsUpdate](#posmerchantsupdate) - Update Merchant
* [posMerchantsDelete](#posmerchantsdelete) - Delete Merchant
* [posLocationsAll](#poslocationsall) - List Locations
* [posLocationsAdd](#poslocationsadd) - Create Location
* [posLocationsOne](#poslocationsone) - Get Location
* [posLocationsUpdate](#poslocationsupdate) - Update Location
* [posLocationsDelete](#poslocationsdelete) - Delete Location
* [posItemsAll](#positemsall) - List Items
* [posItemsAdd](#positemsadd) - Create Item
* [posItemsOne](#positemsone) - Get Item
* [posItemsUpdate](#positemsupdate) - Update Item
* [posItemsDelete](#positemsdelete) - Delete Item
* [posModifiersAll](#posmodifiersall) - List Modifiers
* [posModifiersAdd](#posmodifiersadd) - Create Modifier
* [posModifiersOne](#posmodifiersone) - Get Modifier
* [posModifiersUpdate](#posmodifiersupdate) - Update Modifier
* [posModifiersDelete](#posmodifiersdelete) - Delete Modifier
* [posModifierGroupsAll](#posmodifiergroupsall) - List Modifier Groups
* [posModifierGroupsAdd](#posmodifiergroupsadd) - Create Modifier Group
* [posModifierGroupsOne](#posmodifiergroupsone) - Get Modifier Group
* [posModifierGroupsUpdate](#posmodifiergroupsupdate) - Update Modifier Group
* [posModifierGroupsDelete](#posmodifiergroupsdelete) - Delete Modifier Group
* [posOrderTypesAll](#posordertypesall) - List Order Types
* [posOrderTypesAdd](#posordertypesadd) - Create Order Type
* [posOrderTypesOne](#posordertypesone) - Get Order Type
* [posOrderTypesUpdate](#posordertypesupdate) - Update Order Type
* [posOrderTypesDelete](#posordertypesdelete) - Delete Order Type
* [posTendersAll](#postendersall) - List Tenders
* [posTendersAdd](#postendersadd) - Create Tender
* [posTendersOne](#postendersone) - Get Tender
* [posTendersUpdate](#postendersupdate) - Update Tender
* [posTendersDelete](#postendersdelete) - Delete Tender

## posOrdersAll

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
  const result = await apideck.pos.posOrdersAll({
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
import { posPosOrdersAll } from "apideck/funcs/posPosOrdersAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrdersAll(apideck, {
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

## posOrdersAdd

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
  const result = await apideck.pos.posOrdersAdd({
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
import { posPosOrdersAdd } from "apideck/funcs/posPosOrdersAdd.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrdersAdd(apideck, {
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

## posOrdersOne

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
  const result = await apideck.pos.posOrdersOne({
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
import { posPosOrdersOne } from "apideck/funcs/posPosOrdersOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrdersOne(apideck, {
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

## posOrdersUpdate

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
  const result = await apideck.pos.posOrdersUpdate({
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
import { posPosOrdersUpdate } from "apideck/funcs/posPosOrdersUpdate.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrdersUpdate(apideck, {
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

## posOrdersDelete

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
  const result = await apideck.pos.posOrdersDelete({
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
import { posPosOrdersDelete } from "apideck/funcs/posPosOrdersDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrdersDelete(apideck, {
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

## posOrdersPay

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
  const result = await apideck.pos.posOrdersPay({
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
import { posPosOrdersPay } from "apideck/funcs/posPosOrdersPay.js";
import { RFCDate } from "apideck/types";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrdersPay(apideck, {
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

## posPaymentsAll

List Payments

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posPaymentsAll({
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
import { posPosPaymentsAll } from "apideck/funcs/posPosPaymentsAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosPaymentsAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosPaymentsAllRequest](../../models/operations/pospaymentsallrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsAllResponse](../../models/operations/pospaymentsallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posPaymentsAdd

Create Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posPaymentsAdd({
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
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
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "bank_transfer",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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
import { posPosPaymentsAdd } from "apideck/funcs/posPosPaymentsAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosPaymentsAdd(apideck, {
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
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
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "bank_transfer",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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
| `request`                                                                                                                                                                      | [operations.PosPaymentsAddRequest](../../models/operations/pospaymentsaddrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsAddResponse](../../models/operations/pospaymentsaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posPaymentsOne

Get Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posPaymentsOne({
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
import { posPosPaymentsOne } from "apideck/funcs/posPosPaymentsOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosPaymentsOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosPaymentsOneRequest](../../models/operations/pospaymentsonerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsOneResponse](../../models/operations/pospaymentsoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posPaymentsUpdate

Update Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posPaymentsUpdate({
    id: "<id>",
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
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
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "stored_balance",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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
import { posPosPaymentsUpdate } from "apideck/funcs/posPosPaymentsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosPaymentsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
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
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "stored_balance",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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
| `request`                                                                                                                                                                      | [operations.PosPaymentsUpdateRequest](../../models/operations/pospaymentsupdaterequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsUpdateResponse](../../models/operations/pospaymentsupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posPaymentsDelete

Delete Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posPaymentsDelete({
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
import { posPosPaymentsDelete } from "apideck/funcs/posPosPaymentsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosPaymentsDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosPaymentsDeleteRequest](../../models/operations/pospaymentsdeleterequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsDeleteResponse](../../models/operations/pospaymentsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posMerchantsAll

List Merchants

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posMerchantsAll({
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
import { posPosMerchantsAll } from "apideck/funcs/posPosMerchantsAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosMerchantsAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosMerchantsAllRequest](../../models/operations/posmerchantsallrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosMerchantsAllResponse](../../models/operations/posmerchantsallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posMerchantsAdd

Create Merchant

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posMerchantsAdd({
    serviceId: "salesforce",
    merchant: {
      name: "Dunkin Donuts",
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
      ownerId: "12345",
      mainLocationId: "12345",
      status: "active",
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
      ],
      language: "EN",
      currency: "USD",
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
import { posPosMerchantsAdd } from "apideck/funcs/posPosMerchantsAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosMerchantsAdd(apideck, {
    serviceId: "salesforce",
    merchant: {
      name: "Dunkin Donuts",
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
      ownerId: "12345",
      mainLocationId: "12345",
      status: "active",
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
      ],
      language: "EN",
      currency: "USD",
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
| `request`                                                                                                                                                                      | [operations.PosMerchantsAddRequest](../../models/operations/posmerchantsaddrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosMerchantsAddResponse](../../models/operations/posmerchantsaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posMerchantsOne

Get Merchant

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posMerchantsOne({
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
import { posPosMerchantsOne } from "apideck/funcs/posPosMerchantsOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosMerchantsOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosMerchantsOneRequest](../../models/operations/posmerchantsonerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosMerchantsOneResponse](../../models/operations/posmerchantsoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posMerchantsUpdate

Update Merchant

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posMerchantsUpdate({
    id: "<id>",
    serviceId: "salesforce",
    merchant: {
      name: "Dunkin Donuts",
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
      ownerId: "12345",
      mainLocationId: "12345",
      status: "active",
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
      language: "EN",
      currency: "USD",
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
import { posPosMerchantsUpdate } from "apideck/funcs/posPosMerchantsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosMerchantsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    merchant: {
      name: "Dunkin Donuts",
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
      ownerId: "12345",
      mainLocationId: "12345",
      status: "active",
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
      language: "EN",
      currency: "USD",
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
| `request`                                                                                                                                                                      | [operations.PosMerchantsUpdateRequest](../../models/operations/posmerchantsupdaterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosMerchantsUpdateResponse](../../models/operations/posmerchantsupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posMerchantsDelete

Delete Merchant

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posMerchantsDelete({
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
import { posPosMerchantsDelete } from "apideck/funcs/posPosMerchantsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosMerchantsDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosMerchantsDeleteRequest](../../models/operations/posmerchantsdeleterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosMerchantsDeleteResponse](../../models/operations/posmerchantsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posLocationsAll

List Locations

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posLocationsAll({
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
import { posPosLocationsAll } from "apideck/funcs/posPosLocationsAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosLocationsAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosLocationsAllRequest](../../models/operations/poslocationsallrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosLocationsAllResponse](../../models/operations/poslocationsallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posLocationsAdd

Create Location

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posLocationsAdd({
    serviceId: "salesforce",
    location: {
      name: "Dunkin Donuts",
      businessName: "Dunkin Donuts LLC",
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
      status: "active",
      merchantId: "12345",
      currency: "USD",
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
import { posPosLocationsAdd } from "apideck/funcs/posPosLocationsAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosLocationsAdd(apideck, {
    serviceId: "salesforce",
    location: {
      name: "Dunkin Donuts",
      businessName: "Dunkin Donuts LLC",
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
      status: "active",
      merchantId: "12345",
      currency: "USD",
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
| `request`                                                                                                                                                                      | [operations.PosLocationsAddRequest](../../models/operations/poslocationsaddrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosLocationsAddResponse](../../models/operations/poslocationsaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posLocationsOne

Get Location

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posLocationsOne({
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
import { posPosLocationsOne } from "apideck/funcs/posPosLocationsOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosLocationsOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosLocationsOneRequest](../../models/operations/poslocationsonerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosLocationsOneResponse](../../models/operations/poslocationsoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posLocationsUpdate

Update Location

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posLocationsUpdate({
    id: "<id>",
    serviceId: "salesforce",
    location: {
      name: "Dunkin Donuts",
      businessName: "Dunkin Donuts LLC",
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
      status: "active",
      merchantId: "12345",
      currency: "USD",
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
import { posPosLocationsUpdate } from "apideck/funcs/posPosLocationsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosLocationsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    location: {
      name: "Dunkin Donuts",
      businessName: "Dunkin Donuts LLC",
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
      status: "active",
      merchantId: "12345",
      currency: "USD",
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
| `request`                                                                                                                                                                      | [operations.PosLocationsUpdateRequest](../../models/operations/poslocationsupdaterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosLocationsUpdateResponse](../../models/operations/poslocationsupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posLocationsDelete

Delete Location

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posLocationsDelete({
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
import { posPosLocationsDelete } from "apideck/funcs/posPosLocationsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosLocationsDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosLocationsDeleteRequest](../../models/operations/poslocationsdeleterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosLocationsDeleteResponse](../../models/operations/poslocationsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posItemsAll

List Items

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posItemsAll({
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
import { posPosItemsAll } from "apideck/funcs/posPosItemsAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosItemsAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosItemsAllRequest](../../models/operations/positemsallrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosItemsAllResponse](../../models/operations/positemsallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posItemsAdd

Create Item

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posItemsAdd({
    serviceId: "salesforce",
    item: {
      id: "#cocoa",
      idempotencyKey: "random_string",
      name: "Cocoa",
      description: "Hot Chocolate",
      abbreviation: "Ch",
      productType: "regular",
      priceAmount: 10,
      pricingType: "fixed",
      priceCurrency: "USD",
      cost: 2,
      taxIds: [
        "12345",
        "67890",
      ],
      isRevenue: false,
      useDefaultTaxRates: false,
      absentAtLocationIds: [
        "12345",
        "67890",
      ],
      presentAtAllLocations: false,
      availableForPickup: false,
      availableOnline: false,
      sku: "11910345",
      code: "11910345",
      categories: [
        {
          name: "Food",
          imageIds: [
            "12345",
            "67890",
          ],
        },
      ],
      options: [
        {
          id: "12345",
          name: "Option 1",
          attributeId: "12345",
        },
      ],
      variations: [
        {
          name: "Food",
          sku: "11910345",
          sequence: 0,
          pricingType: "fixed",
          priceAmount: 10,
          priceCurrency: "USD",
          stockable: false,
          presentAtAllLocations: false,
        },
      ],
      modifierGroups: [
        {},
      ],
      available: true,
      hidden: true,
      deleted: true,
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
import { posPosItemsAdd } from "apideck/funcs/posPosItemsAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosItemsAdd(apideck, {
    serviceId: "salesforce",
    item: {
      id: "#cocoa",
      idempotencyKey: "random_string",
      name: "Cocoa",
      description: "Hot Chocolate",
      abbreviation: "Ch",
      productType: "regular",
      priceAmount: 10,
      pricingType: "fixed",
      priceCurrency: "USD",
      cost: 2,
      taxIds: [
        "12345",
        "67890",
      ],
      isRevenue: false,
      useDefaultTaxRates: false,
      absentAtLocationIds: [
        "12345",
        "67890",
      ],
      presentAtAllLocations: false,
      availableForPickup: false,
      availableOnline: false,
      sku: "11910345",
      code: "11910345",
      categories: [
        {
          name: "Food",
          imageIds: [
            "12345",
            "67890",
          ],
        },
      ],
      options: [
        {
          id: "12345",
          name: "Option 1",
          attributeId: "12345",
        },
      ],
      variations: [
        {
          name: "Food",
          sku: "11910345",
          sequence: 0,
          pricingType: "fixed",
          priceAmount: 10,
          priceCurrency: "USD",
          stockable: false,
          presentAtAllLocations: false,
        },
      ],
      modifierGroups: [
        {},
      ],
      available: true,
      hidden: true,
      deleted: true,
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
| `request`                                                                                                                                                                      | [operations.PosItemsAddRequest](../../models/operations/positemsaddrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosItemsAddResponse](../../models/operations/positemsaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posItemsOne

Get Item

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posItemsOne({
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
import { posPosItemsOne } from "apideck/funcs/posPosItemsOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosItemsOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosItemsOneRequest](../../models/operations/positemsonerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosItemsOneResponse](../../models/operations/positemsoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posItemsUpdate

Update Item

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posItemsUpdate({
    id: "<id>",
    serviceId: "salesforce",
    item: {
      id: "#cocoa",
      idempotencyKey: "random_string",
      name: "Cocoa",
      description: "Hot Chocolate",
      abbreviation: "Ch",
      productType: "regular",
      priceAmount: 10,
      pricingType: "fixed",
      priceCurrency: "USD",
      cost: 2,
      taxIds: [
        "12345",
        "67890",
      ],
      isRevenue: false,
      useDefaultTaxRates: false,
      absentAtLocationIds: [
        "12345",
        "67890",
      ],
      presentAtAllLocations: false,
      availableForPickup: false,
      availableOnline: false,
      sku: "11910345",
      code: "11910345",
      categories: [
        {
          name: "Food",
          imageIds: [
            "12345",
            "67890",
          ],
        },
      ],
      options: [
        {
          id: "12345",
          name: "Option 1",
          attributeId: "12345",
        },
      ],
      variations: [
        {
          name: "Food",
          sku: "11910345",
          sequence: 0,
          pricingType: "fixed",
          priceAmount: 10,
          priceCurrency: "USD",
          stockable: false,
          presentAtAllLocations: false,
        },
      ],
      modifierGroups: [
        {},
      ],
      available: true,
      hidden: true,
      deleted: true,
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
import { posPosItemsUpdate } from "apideck/funcs/posPosItemsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosItemsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    item: {
      id: "#cocoa",
      idempotencyKey: "random_string",
      name: "Cocoa",
      description: "Hot Chocolate",
      abbreviation: "Ch",
      productType: "regular",
      priceAmount: 10,
      pricingType: "fixed",
      priceCurrency: "USD",
      cost: 2,
      taxIds: [
        "12345",
        "67890",
      ],
      isRevenue: false,
      useDefaultTaxRates: false,
      absentAtLocationIds: [
        "12345",
        "67890",
      ],
      presentAtAllLocations: false,
      availableForPickup: false,
      availableOnline: false,
      sku: "11910345",
      code: "11910345",
      categories: [
        {
          name: "Food",
          imageIds: [
            "12345",
            "67890",
          ],
        },
      ],
      options: [
        {
          id: "12345",
          name: "Option 1",
          attributeId: "12345",
        },
      ],
      variations: [
        {
          name: "Food",
          sku: "11910345",
          sequence: 0,
          pricingType: "fixed",
          priceAmount: 10,
          priceCurrency: "USD",
          stockable: false,
          presentAtAllLocations: false,
        },
      ],
      modifierGroups: [
        {},
      ],
      available: true,
      hidden: true,
      deleted: true,
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
| `request`                                                                                                                                                                      | [operations.PosItemsUpdateRequest](../../models/operations/positemsupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosItemsUpdateResponse](../../models/operations/positemsupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posItemsDelete

Delete Item

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posItemsDelete({
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
import { posPosItemsDelete } from "apideck/funcs/posPosItemsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosItemsDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosItemsDeleteRequest](../../models/operations/positemsdeleterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosItemsDeleteResponse](../../models/operations/positemsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifiersAll

List Modifiers

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifiersAll({
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
import { posPosModifiersAll } from "apideck/funcs/posPosModifiersAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifiersAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosModifiersAllRequest](../../models/operations/posmodifiersallrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifiersAllResponse](../../models/operations/posmodifiersallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifiersAdd

Create Modifier

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifiersAdd({
    serviceId: "salesforce",
    modifier: {
      idempotencyKey: "random_string",
      name: "Modifier",
      alternateName: "Modifier New",
      priceAmount: 10,
      currency: "USD",
      modifierGroupId: "123",
      available: true,
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
import { posPosModifiersAdd } from "apideck/funcs/posPosModifiersAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifiersAdd(apideck, {
    serviceId: "salesforce",
    modifier: {
      idempotencyKey: "random_string",
      name: "Modifier",
      alternateName: "Modifier New",
      priceAmount: 10,
      currency: "USD",
      modifierGroupId: "123",
      available: true,
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
| `request`                                                                                                                                                                      | [operations.PosModifiersAddRequest](../../models/operations/posmodifiersaddrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifiersAddResponse](../../models/operations/posmodifiersaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifiersOne

Get Modifier

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifiersOne({
    id: "<id>",
    serviceId: "salesforce",
    filter: {
      modifierGroupId: "1234",
    },
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
import { posPosModifiersOne } from "apideck/funcs/posPosModifiersOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifiersOne(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    filter: {
      modifierGroupId: "1234",
    },
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
| `request`                                                                                                                                                                      | [operations.PosModifiersOneRequest](../../models/operations/posmodifiersonerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifiersOneResponse](../../models/operations/posmodifiersoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifiersUpdate

Update Modifier

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifiersUpdate({
    id: "<id>",
    serviceId: "salesforce",
    modifier: {
      idempotencyKey: "random_string",
      name: "Modifier",
      alternateName: "Modifier New",
      priceAmount: 10,
      currency: "USD",
      modifierGroupId: "123",
      available: true,
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
import { posPosModifiersUpdate } from "apideck/funcs/posPosModifiersUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifiersUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    modifier: {
      idempotencyKey: "random_string",
      name: "Modifier",
      alternateName: "Modifier New",
      priceAmount: 10,
      currency: "USD",
      modifierGroupId: "123",
      available: true,
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
| `request`                                                                                                                                                                      | [operations.PosModifiersUpdateRequest](../../models/operations/posmodifiersupdaterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifiersUpdateResponse](../../models/operations/posmodifiersupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifiersDelete

Delete Modifier

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifiersDelete({
    id: "<id>",
    serviceId: "salesforce",
    filter: {
      modifierGroupId: "1234",
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
import { posPosModifiersDelete } from "apideck/funcs/posPosModifiersDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifiersDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    filter: {
      modifierGroupId: "1234",
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
| `request`                                                                                                                                                                      | [operations.PosModifiersDeleteRequest](../../models/operations/posmodifiersdeleterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifiersDeleteResponse](../../models/operations/posmodifiersdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifierGroupsAll

List Modifier Groups

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifierGroupsAll({
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
import { posPosModifierGroupsAll } from "apideck/funcs/posPosModifierGroupsAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifierGroupsAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosModifierGroupsAllRequest](../../models/operations/posmodifiergroupsallrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifierGroupsAllResponse](../../models/operations/posmodifiergroupsallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifierGroupsAdd

Create Modifier Group

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifierGroupsAdd({
    serviceId: "salesforce",
    modifierGroup: {
      name: "Modifier",
      alternateName: "Modifier New",
      minimumRequired: 1,
      maximumAllowed: 5,
      selectionType: "single",
      presentAtAllLocations: false,
      modifiers: [
        {
          id: "12345",
          name: "Modifier",
          alternateName: "Modifier New",
          priceAmount: 10,
          currency: "USD",
          available: true,
        },
      ],
      deleted: true,
      rowVersion: "1-12345",
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
import { posPosModifierGroupsAdd } from "apideck/funcs/posPosModifierGroupsAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifierGroupsAdd(apideck, {
    serviceId: "salesforce",
    modifierGroup: {
      name: "Modifier",
      alternateName: "Modifier New",
      minimumRequired: 1,
      maximumAllowed: 5,
      selectionType: "single",
      presentAtAllLocations: false,
      modifiers: [
        {
          id: "12345",
          name: "Modifier",
          alternateName: "Modifier New",
          priceAmount: 10,
          currency: "USD",
          available: true,
        },
      ],
      deleted: true,
      rowVersion: "1-12345",
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
| `request`                                                                                                                                                                      | [operations.PosModifierGroupsAddRequest](../../models/operations/posmodifiergroupsaddrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifierGroupsAddResponse](../../models/operations/posmodifiergroupsaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifierGroupsOne

Get Modifier Group

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifierGroupsOne({
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
import { posPosModifierGroupsOne } from "apideck/funcs/posPosModifierGroupsOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifierGroupsOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosModifierGroupsOneRequest](../../models/operations/posmodifiergroupsonerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifierGroupsOneResponse](../../models/operations/posmodifiergroupsoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifierGroupsUpdate

Update Modifier Group

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifierGroupsUpdate({
    id: "<id>",
    serviceId: "salesforce",
    modifierGroup: {
      name: "Modifier",
      alternateName: "Modifier New",
      minimumRequired: 1,
      maximumAllowed: 5,
      selectionType: "single",
      presentAtAllLocations: false,
      modifiers: [
        {
          id: "12345",
          name: "Modifier",
          alternateName: "Modifier New",
          priceAmount: 10,
          currency: "USD",
          available: true,
        },
      ],
      deleted: true,
      rowVersion: "1-12345",
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
import { posPosModifierGroupsUpdate } from "apideck/funcs/posPosModifierGroupsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifierGroupsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    modifierGroup: {
      name: "Modifier",
      alternateName: "Modifier New",
      minimumRequired: 1,
      maximumAllowed: 5,
      selectionType: "single",
      presentAtAllLocations: false,
      modifiers: [
        {
          id: "12345",
          name: "Modifier",
          alternateName: "Modifier New",
          priceAmount: 10,
          currency: "USD",
          available: true,
        },
      ],
      deleted: true,
      rowVersion: "1-12345",
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
| `request`                                                                                                                                                                      | [operations.PosModifierGroupsUpdateRequest](../../models/operations/posmodifiergroupsupdaterequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifierGroupsUpdateResponse](../../models/operations/posmodifiergroupsupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posModifierGroupsDelete

Delete Modifier Group

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posModifierGroupsDelete({
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
import { posPosModifierGroupsDelete } from "apideck/funcs/posPosModifierGroupsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosModifierGroupsDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosModifierGroupsDeleteRequest](../../models/operations/posmodifiergroupsdeleterequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosModifierGroupsDeleteResponse](../../models/operations/posmodifiergroupsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posOrderTypesAll

List Order Types

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posOrderTypesAll({
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
import { posPosOrderTypesAll } from "apideck/funcs/posPosOrderTypesAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrderTypesAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosOrderTypesAllRequest](../../models/operations/posordertypesallrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrderTypesAllResponse](../../models/operations/posordertypesallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posOrderTypesAdd

Create Order Type

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posOrderTypesAdd({
    serviceId: "salesforce",
    orderType: {
      name: "Default order type",
      default: true,
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
import { posPosOrderTypesAdd } from "apideck/funcs/posPosOrderTypesAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrderTypesAdd(apideck, {
    serviceId: "salesforce",
    orderType: {
      name: "Default order type",
      default: true,
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
| `request`                                                                                                                                                                      | [operations.PosOrderTypesAddRequest](../../models/operations/posordertypesaddrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrderTypesAddResponse](../../models/operations/posordertypesaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posOrderTypesOne

Get Order Type

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posOrderTypesOne({
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
import { posPosOrderTypesOne } from "apideck/funcs/posPosOrderTypesOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrderTypesOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosOrderTypesOneRequest](../../models/operations/posordertypesonerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrderTypesOneResponse](../../models/operations/posordertypesoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posOrderTypesUpdate

Update Order Type

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posOrderTypesUpdate({
    id: "<id>",
    serviceId: "salesforce",
    orderType: {
      name: "Default order type",
      default: true,
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
import { posPosOrderTypesUpdate } from "apideck/funcs/posPosOrderTypesUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrderTypesUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    orderType: {
      name: "Default order type",
      default: true,
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
| `request`                                                                                                                                                                      | [operations.PosOrderTypesUpdateRequest](../../models/operations/posordertypesupdaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrderTypesUpdateResponse](../../models/operations/posordertypesupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posOrderTypesDelete

Delete Order Type

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posOrderTypesDelete({
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
import { posPosOrderTypesDelete } from "apideck/funcs/posPosOrderTypesDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosOrderTypesDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosOrderTypesDeleteRequest](../../models/operations/posordertypesdeleterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosOrderTypesDeleteResponse](../../models/operations/posordertypesdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posTendersAll

List Tenders

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posTendersAll({
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
import { posPosTendersAll } from "apideck/funcs/posPosTendersAll.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosTendersAll(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosTendersAllRequest](../../models/operations/postendersallrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosTendersAllResponse](../../models/operations/postendersallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posTendersAdd

Create Tender

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posTendersAdd({
    serviceId: "salesforce",
    tender: {
      key: "com.clover.tender.cash",
      label: "Cash",
      active: true,
      hidden: true,
      editable: true,
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
import { posPosTendersAdd } from "apideck/funcs/posPosTendersAdd.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosTendersAdd(apideck, {
    serviceId: "salesforce",
    tender: {
      key: "com.clover.tender.cash",
      label: "Cash",
      active: true,
      hidden: true,
      editable: true,
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
| `request`                                                                                                                                                                      | [operations.PosTendersAddRequest](../../models/operations/postendersaddrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosTendersAddResponse](../../models/operations/postendersaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posTendersOne

Get Tender

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posTendersOne({
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
import { posPosTendersOne } from "apideck/funcs/posPosTendersOne.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosTendersOne(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosTendersOneRequest](../../models/operations/postendersonerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosTendersOneResponse](../../models/operations/postendersoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posTendersUpdate

Update Tender

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posTendersUpdate({
    id: "<id>",
    serviceId: "salesforce",
    tender: {
      key: "com.clover.tender.cash",
      label: "Cash",
      active: true,
      hidden: true,
      editable: true,
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
import { posPosTendersUpdate } from "apideck/funcs/posPosTendersUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosTendersUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    tender: {
      key: "com.clover.tender.cash",
      label: "Cash",
      active: true,
      hidden: true,
      editable: true,
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
| `request`                                                                                                                                                                      | [operations.PosTendersUpdateRequest](../../models/operations/postendersupdaterequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosTendersUpdateResponse](../../models/operations/postendersupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## posTendersDelete

Delete Tender

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.posTendersDelete({
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
import { posPosTendersDelete } from "apideck/funcs/posPosTendersDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPosTendersDelete(apideck, {
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
| `request`                                                                                                                                                                      | [operations.PosTendersDeleteRequest](../../models/operations/postendersdeleterequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosTendersDeleteResponse](../../models/operations/postendersdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |