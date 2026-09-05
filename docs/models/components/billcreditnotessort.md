# BillCreditNotesSort

## Example Usage

```typescript
import { BillCreditNotesSort } from "@apideck/unify/models/components";

let value: BillCreditNotesSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `by`                                                                                 | [components.BillCreditNotesSortBy](../../models/components/billcreditnotessortby.md) | :heavy_minus_sign:                                                                   | The field on which to sort the Bill Credit Notes                                     | updated_at                                                                           |
| `direction`                                                                          | [components.SortDirection](../../models/components/sortdirection.md)                 | :heavy_minus_sign:                                                                   | The direction in which to sort the results                                           |                                                                                      |