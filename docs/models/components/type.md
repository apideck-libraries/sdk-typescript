# Type

The type of address.

## Example Usage

```typescript
import { Type } from "@apideck/unify/models/components";

let value: Type = "primary";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "work" | "other" | Unrecognized<string>
```