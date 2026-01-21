# ConnectionState

[Connection state flow](#section/Connection-state)

## Example Usage

```typescript
import { ConnectionState } from "@apideck/unify/models/components";

let value: ConnectionState = "authorized";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"available" | "callable" | "added" | "authorized" | "invalid" | Unrecognized<string>
```