# ShowAs

## Example Usage

```typescript
import { ShowAs } from "@apideck/unify/models/components";

let value: ShowAs = "busy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"free" | "busy" | Unrecognized<string>
```