# BatchSupportMode

The connector's overall batch capability: `none` when no resource supports a batch write, otherwise the mode most of its resources use. This is a summary — read `resources` for the answer that applies to the resource you are calling, because a connector can be `native` for one resource and `loop` for another.

## Example Usage

```typescript
import { BatchSupportMode } from "@apideck/unify/models/components";

let value: BatchSupportMode = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "native" | "loop" | Unrecognized<string>
```