# LedgerAccountsFilter

## Example Usage

```typescript
import { LedgerAccountsFilter } from "@apideck/unify/models/components";

let value: LedgerAccountsFilter = {
  name: "Sales",
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  classification: "asset",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by ledger account name                                                                 | Sales                                                                                         |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `classification`                                                                              | [components.Classification](../../models/components/classification.md)                        | :heavy_minus_sign:                                                                            | Filter by account classification.                                                             | asset                                                                                         |