# Status

The status of the webhook.

## Example Usage

```typescript
import { Status } from "@apideck/unify/models/components";

let value: Status = "enabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"enabled" | "disabled" | Unrecognized<string>
```