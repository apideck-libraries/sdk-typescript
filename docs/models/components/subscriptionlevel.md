# SubscriptionLevel

Received events are scoped to connection or across integration.

## Example Usage

```typescript
import { SubscriptionLevel } from "@apideck/unify/models/components";

let value: SubscriptionLevel = "integration";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"connection" | "integration" | Unrecognized<string>
```