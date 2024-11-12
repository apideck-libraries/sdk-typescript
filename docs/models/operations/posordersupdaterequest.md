# PosOrdersUpdateRequest

## Example Usage

```typescript
import { PosOrdersUpdateRequest } from "apideck/models/operations";
import { RFCDate } from "apideck/types";

let value: PosOrdersUpdateRequest = {
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
        note:
          "An optional note associated with the tender at the time of payment.",
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
          fingerprint:
            " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
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
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `order`                                                                                                                                       | [components.OrderInput](../../models/components/orderinput.md)                                                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |