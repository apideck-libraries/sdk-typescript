# CurbsidePickupDetails

Specific details for curbside pickup.

## Example Usage

```typescript
import { CurbsidePickupDetails } from "apideck/models/components";

let value: CurbsidePickupDetails = {
  buyerArrivedAt: new Date("2016-09-04T23:59:33.123Z"),
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `curbsideDetails`                                                                                                                                | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Specific details for curbside pickup, such as parking number and vehicle model.                                                                  |                                                                                                                                                  |
| `buyerArrivedAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                    | :heavy_minus_sign:                                                                                                                               | Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format<br/>(for example, "2016-09-04T23:59:33.123Z"). | 2016-09-04T23:59:33.123Z                                                                                                                         |