# PathMatchMode

How the path filter is matched. CONTAINS matches the path anywhere; STARTS_WITH / ENDS_WITH anchor the match; EXACT requires the whole path to match. Only applied when path is set.

## Example Usage

```typescript
import { PathMatchMode } from "@apideck/unify/models/components";

let value: PathMatchMode = "ENDS_WITH";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CONTAINS" | "STARTS_WITH" | "ENDS_WITH" | "EXACT" | Unrecognized<string>
```