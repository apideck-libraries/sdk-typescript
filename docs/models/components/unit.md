# Unit

The window unit for the rate.

## Example Usage

```typescript
import { Unit } from "@apideck/unify/models/components";

let value: Unit = "day";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"second" | "minute" | "hour" | "day" | Unrecognized<string>
```