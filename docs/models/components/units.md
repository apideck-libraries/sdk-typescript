# Units

The unit of time off requested. Possible values include: `hours`, `days`, or `other`.

## Example Usage

```typescript
import { Units } from "@apideck/unify/models/components";

let value: Units = "hours";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"days" | "hours" | "other" | Unrecognized<string>
```