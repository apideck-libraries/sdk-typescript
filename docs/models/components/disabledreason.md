# DisabledReason

Indicates why the webhook has been disabled. `retry_limit`: webhook reached its retry limit. `usage_limit`: account is over its usage limit. `delivery_url_validation_failed`: delivery URL failed validation during webhook creation or update.

## Example Usage

```typescript
import { DisabledReason } from "@apideck/unify/models/components";

let value: DisabledReason = "retry_limit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "retry_limit" | "usage_limit" | "delivery_url_validation_failed" | Unrecognized<string>
```