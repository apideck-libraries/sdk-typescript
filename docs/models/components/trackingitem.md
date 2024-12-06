# TrackingItem

Represents the tracking information associated with an ecommerce order.

## Example Usage

```typescript
import { TrackingItem } from "@apideck/unify/models/components";

let value: TrackingItem = {
  provider: "UPS",
  number: "1Z9999999999999999",
  url: "https://www.ups.com/track?tracknum=1Z9999999999999999",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `provider`                                                                                                            | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The name or code of the carrier or shipping company that is handling the shipment.                                    | UPS                                                                                                                   |
| `number`                                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    |  The tracking number associated with the shipment, which can be used to track the progress of the delivery.           | 1Z9999999999999999                                                                                                    |
| `url`                                                                                                                 | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The URL of the carrier's tracking page, which can be used to view detailed information about the shipment's progress. | https://www.ups.com/track?tracknum=1Z9999999999999999                                                                 |
| `updatedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_minus_sign:                                                                                                    | The date and time when the object was last updated.                                                                   | 2020-09-30T07:43:32.000Z                                                                                              |