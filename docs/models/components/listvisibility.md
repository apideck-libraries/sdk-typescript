# ListVisibility

The visibility of the List. Which of these values a given connector can return depends on its native sharing model — see the connector-specific gotchas below for details.

## Example Usage

```typescript
import { ListVisibility } from "@apideck/unify/models/components";

let value: ListVisibility = "shared";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "shared" | "public" | Unrecognized<string>
```