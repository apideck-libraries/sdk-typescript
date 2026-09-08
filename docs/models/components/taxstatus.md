# TaxStatus

The tax applicability of the product: `taxable` (the product is taxed), `shipping` (only the shipping is taxed, the product itself is exempt) or `none` (neither is taxed).

## Example Usage

```typescript
import { TaxStatus } from "@apideck/unify/models/components";

let value: TaxStatus = "taxable";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"taxable" | "shipping" | "none" | Unrecognized<string>
```