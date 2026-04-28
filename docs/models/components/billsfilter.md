# BillsFilter

## Example Usage

```typescript
import { BillsFilter } from "@apideck/unify/models/components";

let value: BillsFilter = {
  idSince: "1",
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  status: "paid",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idSince`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Return records with a row ID greater than or equal to the given value                         | 1                                                                                             |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `status`                                                                                      | [components.BillsFilterStatus](../../models/components/billsfilterstatus.md)                  | :heavy_minus_sign:                                                                            | Filter by bill status                                                                         | paid                                                                                          |