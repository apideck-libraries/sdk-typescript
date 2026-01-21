# AmortizationType

Type of amortization

## Example Usage

```typescript
import { AmortizationType } from "@apideck/unify/models/components";

let value: AmortizationType = "receipt";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "receipt" | "schedule" | "other" | Unrecognized<string>
```