# CustomersFilterStatus

Status of customer to filter on

## Example Usage

```typescript
import { CustomersFilterStatus } from "@apideck/unify/models/components";

let value: CustomersFilterStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "archived" | "all" | Unrecognized<string>
```