# RebillStatus

Status of the rebilling process for this line item.

## Example Usage

```typescript
import { RebillStatus } from "@apideck/unify/models/components";

let value: RebillStatus = "billed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "billed" | "voided" | Unrecognized<string>
```