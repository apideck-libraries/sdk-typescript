# CustomerStatus

The current status of the customer

## Example Usage

```typescript
import { CustomerStatus } from "@apideck/unify/models/components";

let value: CustomerStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "archived" | Unrecognized<string>
```