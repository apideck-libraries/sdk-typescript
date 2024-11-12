# Tenders

## Example Usage

```typescript
import { Tenders } from "apideck/models/components";

let value: Tenders = {
  id: "12345",
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
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 10% off                                                                                                                            |
| `type`                                                                                                                             | [components.OrderTendersType](../../models/components/ordertenderstype.md)                                                         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | cash                                                                                                                               |
| `note`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | An optional note associated with the tender at the time of payment.                                                                |
| `amount`                                                                                                                           | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 27500                                                                                                                              |
| `percentage`                                                                                                                       | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 10                                                                                                                                 |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `totalAmount`                                                                                                                      | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 275                                                                                                                                |
| `totalTip`                                                                                                                         | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 7                                                                                                                                  |
| `totalProcessingFee`                                                                                                               | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 0                                                                                                                                  |
| `totalTax`                                                                                                                         | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 2.75                                                                                                                               |
| `totalDiscount`                                                                                                                    | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 3                                                                                                                                  |
| `totalRefund`                                                                                                                      | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 0                                                                                                                                  |
| `totalServiceCharge`                                                                                                               | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 0                                                                                                                                  |
| `buyerTenderedCashAmount`                                                                                                          | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.                                 | 27500                                                                                                                              |
| `changeBackCashAmount`                                                                                                             | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.                                 | 27500                                                                                                                              |
| `card`                                                                                                                             | [components.PaymentCard](../../models/components/paymentcard.md)                                                                   | :heavy_minus_sign:                                                                                                                 | A card's non-confidential details.                                                                                                 |                                                                                                                                    |
| `cardStatus`                                                                                                                       | [components.CardStatus](../../models/components/cardstatus.md)                                                                     | :heavy_minus_sign:                                                                                                                 | The status of the card. Only applicable when the tender type is card.                                                              | authorized                                                                                                                         |
| `cardEntryMethod`                                                                                                                  | [components.CardEntryMethod](../../models/components/cardentrymethod.md)                                                           | :heavy_minus_sign:                                                                                                                 | The entry method of the card. Only applicable when the tender type is card.                                                        | swiped                                                                                                                             |
| `paymentId`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |
| `locationId`                                                                                                                       | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |
| `transactionId`                                                                                                                    | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |