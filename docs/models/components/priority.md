# Priority

Priority level of the project

## Example Usage

```typescript
import { Priority } from "@apideck/unify/models/components";

let value: Priority = "high";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"low" | "medium" | "high" | "critical" | Unrecognized<string>
```