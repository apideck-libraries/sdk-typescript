# PosPaymentsOneResponse


## Supported Types

### `components.GetPosPaymentResponse`

```typescript
const value: components.GetPosPaymentResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "PosPayments",
  operation: "one",
  data: {
    id: "12345",
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
    },
    bankAccount: {
      country: "US",
    },
    externalDetails: {
      type: "emoney",
      source: "<value>",
      sourceFeeAmount: 2.5,
    },
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
};
```

### `components.UnexpectedErrorResponse`

```typescript
const value: components.UnexpectedErrorResponse = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

