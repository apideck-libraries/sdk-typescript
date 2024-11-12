# OrderFulfillments

## Example Usage

```typescript
import { OrderFulfillments } from "apideck/models/components";

let value: OrderFulfillments = {
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 12345                                                                                  |
| `status`                                                                               | [components.OrderFulfillmentStatus](../../models/components/orderfulfillmentstatus.md) | :heavy_minus_sign:                                                                     | The state of the fulfillment.                                                          |                                                                                        |
| `type`                                                                                 | [components.OrderFulfillmentsType](../../models/components/orderfulfillmentstype.md)   | :heavy_minus_sign:                                                                     | N/A                                                                                    | shipment                                                                               |
| `pickupDetails`                                                                        | [components.OrderPickupDetails](../../models/components/orderpickupdetails.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `shipmentDetails`                                                                      | [components.ShipmentDetails](../../models/components/shipmentdetails.md)               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |