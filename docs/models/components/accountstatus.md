# AccountStatus

The status of the account.

## Example Usage

```typescript
import { AccountStatus } from "@apideck/unify/models/components";

let value: AccountStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "archived" | Unrecognized<string>
```