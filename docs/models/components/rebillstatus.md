# RebillStatus

Status of the rebilling process for this line item.

## Example Usage

```typescript
import { RebillStatus } from "@apideck/unify/models/components";

let value: RebillStatus = "billed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "billed" | "voided" | Unrecognized<string>
```