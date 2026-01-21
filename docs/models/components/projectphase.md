# ProjectPhase

Current phase of the project lifecycle

## Example Usage

```typescript
import { ProjectPhase } from "@apideck/unify/models/components";

let value: ProjectPhase = "execution";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"initiation" | "planning" | "execution" | "monitoring" | "closure" | "other" | Unrecognized<string>
```