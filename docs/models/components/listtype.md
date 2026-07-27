# ListType

Whether the List is static (a fixed set of records) or dynamic (a saved segment that is automatically kept up to date based on filter criteria).

## Example Usage

```typescript
import { ListType } from "@apideck/unify/models/components";

let value: ListType = "dynamic";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dynamic" | Unrecognized<string>
```