# Units

The unit of time off requested. Possible values include: `hours`, `days`, or `other`.

## Example Usage

```typescript
import { Units } from "@apideck/unify/models/components";

let value: Units = "hours";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"days" | "hours" | "other" | Unrecognized<string>
```