# ActivityType

The type of the activity

## Example Usage

```typescript
import { ActivityType } from "@apideck/unify/models/components";

let value: ActivityType = "meeting";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other" | Unrecognized<string>
```