# ActivityType

The type of the activity

## Example Usage

```typescript
import { ActivityType } from "@apideck/unify/models/components";

let value: ActivityType = "meeting";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other" | Unrecognized<string>
```