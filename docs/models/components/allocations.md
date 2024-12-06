# Allocations

## Example Usage

```typescript
import { Allocations } from "@apideck/unify/models/components";

let value: Allocations = {
  id: "12345",
  type: "bill",
  code: "N091",
  amount: 49.99,
  allocationId: "123456",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | A unique identifier for an object.                                                                      | 12345                                                                                                   |
| `type`                                                                                                  | [components.BillPaymentAllocationType](../../models/components/billpaymentallocationtype.md)            | :heavy_minus_sign:                                                                                      | Type of entity this payment should be attributed to.                                                    | bill                                                                                                    |
| `code`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | N091                                                                                                    |
| `amount`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Amount of payment that should be attributed to this allocation. If null, the total_amount will be used. | 49.99                                                                                                   |
| `allocationId`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier of the allocation                                                                     | 123456                                                                                                  |