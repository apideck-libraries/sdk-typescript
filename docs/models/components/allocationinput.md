# AllocationInput

## Example Usage

```typescript
import { AllocationInput } from "apideck/models/components";

let value: AllocationInput = {
  id: "123456",
  amount: 49.99,
  allocationId: "123456",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier of entity this payment should be attributed to.                                       | 123456                                                                                                  |
| `type`                                                                                                  | [components.AllocationType](../../models/components/allocationtype.md)                                  | :heavy_minus_sign:                                                                                      | Type of entity this payment should be attributed to.                                                    |                                                                                                         |
| `amount`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Amount of payment that should be attributed to this allocation. If null, the total_amount will be used. | 49.99                                                                                                   |
| `allocationId`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier of the allocation                                                                     | 123456                                                                                                  |