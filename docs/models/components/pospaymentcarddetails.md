# PosPaymentCardDetails

## Example Usage

```typescript
import { PosPaymentCardDetails } from "apideck/models/components";

let value: PosPaymentCardDetails = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `card`                                                                     | [components.PaymentCardInput](../../models/components/paymentcardinput.md) | :heavy_minus_sign:                                                         | A card's non-confidential details.                                         |