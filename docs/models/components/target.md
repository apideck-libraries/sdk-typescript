# Target

## Example Usage

```typescript
import { Target } from "@apideck/unify/models/components";

let value: Target = "custom_fields";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"custom_fields" | "resource" | Unrecognized<string>
```