# Allocation

## Example Usage

```typescript
import { Allocation } from "@apideck/sdk/models/components";

let value: Allocation = {
  id: "123456",
  code: "N091",
  amount: 49.99,
  allocationId: "123456",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier of entity this payment should be attributed to.                                       | 123456                                                                                                  |
| `type`                                                                                                  | [components.AllocationType](../../models/components/allocationtype.md)                                  | :heavy_minus_sign:                                                                                      | Type of entity this payment should be attributed to.                                                    |                                                                                                         |
| `code`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | N091                                                                                                    |
| `amount`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Amount of payment that should be attributed to this allocation. If null, the total_amount will be used. | 49.99                                                                                                   |
| `allocationId`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier of the allocation                                                                     | 123456                                                                                                  |