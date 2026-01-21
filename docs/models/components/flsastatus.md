# FlsaStatus

The FLSA status for this compensation.

## Example Usage

```typescript
import { FlsaStatus } from "@apideck/unify/models/components";

let value: FlsaStatus = "nonexempt";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"exempt" | "salaried-nonexempt" | "nonexempt" | "owner" | "other" | Unrecognized<string>
```