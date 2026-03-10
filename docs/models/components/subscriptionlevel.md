# SubscriptionLevel

Received events are scoped to connection or across integration.

## Example Usage

```typescript
import { SubscriptionLevel } from "@apideck/unify/models/components";

let value: SubscriptionLevel = "integration";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"connection" | "integration" | Unrecognized<string>
```