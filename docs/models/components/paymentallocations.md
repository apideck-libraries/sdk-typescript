# PaymentAllocations

## Example Usage

```typescript
import { PaymentAllocations } from "@apideck/unify/models/components";

let value: PaymentAllocations = {
  id: "123456",
  allocatedAmount: 1000,
  date: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the payment                                                                             | 123456                                                                                        |
| `allocatedAmount`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | Amount of the payment allocated to the invoice                                                | 1000                                                                                          |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of the payment                                                                           | 2020-09-30T07:43:32.000Z                                                                      |