# Unit

The window unit for the rate.

## Example Usage

```typescript
import { Unit } from "@apideck/unify/models/components";

let value: Unit = "day";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"second" | "minute" | "hour" | "day" | Unrecognized<string>
```