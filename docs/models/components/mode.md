# Mode

Mode of the webhook support.

## Example Usage

```typescript
import { Mode } from "@apideck/unify/models/components";

let value: Mode = "native";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"native" | "virtual" | "none" | Unrecognized<string>
```