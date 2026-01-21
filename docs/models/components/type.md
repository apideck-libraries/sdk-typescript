# Type

The type of address.

## Example Usage

```typescript
import { Type } from "@apideck/unify/models/components";

let value: Type = "primary";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "work" | "other" | Unrecognized<string>
```