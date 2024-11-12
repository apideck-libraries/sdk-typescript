# ContactsSort

## Example Usage

```typescript
import { ContactsSort } from "apideck/models/components";

let value: ContactsSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `by`                                                                   | [components.ContactsSortBy](../../models/components/contactssortby.md) | :heavy_minus_sign:                                                     | The field on which to sort the Contacts                                | created_at                                                             |
| `direction`                                                            | [components.SortDirection](../../models/components/sortdirection.md)   | :heavy_minus_sign:                                                     | The direction in which to sort the results                             |                                                                        |