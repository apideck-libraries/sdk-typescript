# EventSource

Unify event source

## Example Usage

```typescript
import { EventSource } from "@apideck/unify/models/components";

let value: EventSource = "native";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"native" | "virtual" | Unrecognized<string>
```