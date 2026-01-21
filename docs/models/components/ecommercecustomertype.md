# EcommerceCustomerType

## Example Usage

```typescript
import { EcommerceCustomerType } from "@apideck/unify/models/components";

let value: EcommerceCustomerType = "billing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"billing" | "shipping" | "other" | Unrecognized<string>
```