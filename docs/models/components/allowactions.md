# AllowActions

## Example Usage

```typescript
import { AllowActions } from "@apideck/unify/models/components";

let value: AllowActions = "disable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"delete" | "disconnect" | "reauthorize" | "disable" | Unrecognized<string>
```