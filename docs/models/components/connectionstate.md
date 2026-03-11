# ConnectionState

[Connection state flow](#section/Connection-state)

## Example Usage

```typescript
import { ConnectionState } from "@apideck/unify/models/components";

let value: ConnectionState = "authorized";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"available" | "callable" | "added" | "authorized" | "invalid" | Unrecognized<string>
```