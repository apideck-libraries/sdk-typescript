# Direction

The direction of the message.

## Example Usage

```typescript
import { Direction } from "@apideck/unify/models/components";

let value: Direction = "outbound-api";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"inbound" | "outbound-api" | "outbound-call" | "outbound-reply" | "unknown" | Unrecognized<string>
```