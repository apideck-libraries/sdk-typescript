# LeavingReason

The reason because the employment ended.

## Example Usage

```typescript
import { LeavingReason } from "@apideck/unify/models/components";

let value: LeavingReason = "resigned";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dismissed" | "resigned" | "redundancy" | "other" | Unrecognized<string>
```