# ManagedVia

How the subscription is managed in the downstream.

## Example Usage

```typescript
import { ManagedVia } from "@apideck/unify/models/components";

let value: ManagedVia = "api";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "api" | Unrecognized<string>
```