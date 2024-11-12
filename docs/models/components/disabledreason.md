# DisabledReason

Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.

## Example Usage

```typescript
import { DisabledReason } from "apideck/models/components";

let value: DisabledReason = "retry_limit";
```

## Values

```typescript
"none" | "retry_limit" | "usage_limit"
```