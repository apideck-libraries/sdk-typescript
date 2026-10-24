# BankFeedAccountStatus

Whether the data consumer may see this account. `revoked` hides it from the consumer without deleting it; `active` restores it. Unrelated to `feed_status`. Only connectors that list it support it; others ignore the field, so setting it there changes nothing.

## Example Usage

```typescript
import { BankFeedAccountStatus } from "@apideck/unify/models/components";

let value: BankFeedAccountStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "revoked" | Unrecognized<string>
```