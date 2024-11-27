# TicketsSort

## Example Usage

```typescript
import { TicketsSort } from "@apideck/sdk/models/components";

let value: TicketsSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `by`                                                                 | [components.TicketsSortBy](../../models/components/ticketssortby.md) | :heavy_minus_sign:                                                   | The field on which to sort the Tickets                               | created_at                                                           |
| `direction`                                                          | [components.SortDirection](../../models/components/sortdirection.md) | :heavy_minus_sign:                                                   | The direction in which to sort the results                           |                                                                      |