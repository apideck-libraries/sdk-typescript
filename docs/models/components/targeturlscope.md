# TargetURLScope

Where the vendor stores the webhook target URL. `app` means one URL per vendor developer app, which customers on Apideck's own credentials cannot configure. `tenant` means each customer's vendor account holds its own URL.

## Example Usage

```typescript
import { TargetURLScope } from "@apideck/unify/models/components";

let value: TargetURLScope = "app";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"app" | "tenant" | Unrecognized<string>
```