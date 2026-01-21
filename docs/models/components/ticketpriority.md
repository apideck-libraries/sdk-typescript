# TicketPriority

Priority of the ticket

## Example Usage

```typescript
import { TicketPriority } from "@apideck/unify/models/components";

let value: TicketPriority = "high";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"low" | "normal" | "high" | "urgent" | Unrecognized<string>
```