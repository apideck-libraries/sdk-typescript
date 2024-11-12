# PosOrdersAllResponse


## Supported Types

### `components.GetOrdersResponse`

```typescript
const value: components.GetOrdersResponse = {
  statusCode: 200,
  status: "OK",
  service: "clover",
  resource: "orders",
  operation: "all",
  data: [
    {
      id: "12345",
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
            acceptedAt: new Date("2020-09-30T07:43:32.000Z"),
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
          id: "12345",
          name: "New York Strip Steak",
          item: {
            id: "12345",
          },
          totalTax: 2000,
          totalDiscount: 3000,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          appliedTaxes: [
            {
              id: "12345",
              taxId: "sales-tax",
              amount: 27500,
              currency: "USD",
            },
          ],
          appliedDiscounts: [
            {
              id: "12345",
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
          id: "12345",
          amount: 27500,
          currency: "USD",
        },
      ],
      serviceCharges: [
        {
          id: "12345",
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      refunds: [
        {
          id: "12345",
          locationId: "12345",
          amount: 27500,
          currency: "USD",
          reason: "The reason for the refund being issued.",
          tenderId: "12345",
          transactionId: "12345",
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
          id: "12345",
          productId: "12345",
          name: "10% off",
          type: "percentage",
          amount: 27500,
          currency: "USD",
          scope: "order",
        },
      ],
      tenders: [
        {
          id: "12345",
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
            id: "12345",
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
          paymentId: "12345",
          locationId: "12345",
          transactionId: "12345",
        },
      ],
      source: "api",
      voided: false,
      voidedAt: new Date("2020-09-30T07:43:32.000Z"),
      version: "230320320320",
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

