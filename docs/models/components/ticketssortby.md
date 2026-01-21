# TicketsSortBy

The field on which to sort the Tickets

## Example Usage

```typescript
import { TicketsSortBy } from "@apideck/unify/models/components";

let value: TicketsSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```