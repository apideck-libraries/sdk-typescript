# BillPaymentAllocations

## Example Usage

```typescript
import { BillPaymentAllocations } from "apideck/models/components";

let value: BillPaymentAllocations = {
  id: "12345",
  type: "bill",
  amount: 49.99,
  allocationId: "123456",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | A unique identifier for an object.                                                                      | 12345                                                                                                   |
| `type`                                                                                                  | [components.BillPaymentAllocationType](../../models/components/billpaymentallocationtype.md)            | :heavy_minus_sign:                                                                                      | Type of entity this payment should be attributed to.                                                    | bill                                                                                                    |
| `amount`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Amount of payment that should be attributed to this allocation. If null, the total_amount will be used. | 49.99                                                                                                   |
| `allocationId`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier of the allocation                                                                     | 123456                                                                                                  |