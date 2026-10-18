# LineType

`account`: a ledger account. `unappropriated_result`: the result of earlier fiscal years not yet posted to an equity account, added by the connector. `unmapped`: a balance the accounting system reports without a ledger account.

## Example Usage

```typescript
import { LineType } from "@apideck/unify/models/components";

let value: LineType = "account";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"account" | "unappropriated_result" | "unmapped" | Unrecognized<string>
```