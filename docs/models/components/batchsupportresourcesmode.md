# BatchSupportResourcesMode

`none` means this resource refuses batch writes. `native` satisfies a batch in a single downstream call against the provider's own batch endpoint, so the request counts as one request against your plan. `loop` satisfies it as a bounded sequential fan-out, one downstream call per item — so a request of N records takes roughly N times as long and counts as N requests.

## Example Usage

```typescript
import { BatchSupportResourcesMode } from "@apideck/unify/models/components";

let value: BatchSupportResourcesMode = "native";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "native" | "loop" | Unrecognized<string>
```