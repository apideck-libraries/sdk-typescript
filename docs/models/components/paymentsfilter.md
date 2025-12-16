# PaymentsFilter

## Example Usage

```typescript
import { PaymentsFilter } from "@apideck/unify/models/components";

let value: PaymentsFilter = {
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  invoiceId: "123",
  supplierId: "123",
  type: "accounts_receivable",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `invoiceId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 123                                                                                           |
| `supplierId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 123                                                                                           |
| `type`                                                                                        | [components.PaymentsFilterType](../../models/components/paymentsfiltertype.md)                | :heavy_minus_sign:                                                                            | N/A                                                                                           | accounts_receivable                                                                           |