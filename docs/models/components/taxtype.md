# TaxType

The tax applicability of this line item. Overrides the root-level tax_type for this line.

## Example Usage

```typescript
import { TaxType } from "@apideck/unify/models/components";

let value: TaxType = "sales";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sales" | "purchase" | Unrecognized<string>
```