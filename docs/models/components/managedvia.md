# ManagedVia

How the subscription is managed in the downstream.

## Example Usage

```typescript
import { ManagedVia } from "@apideck/unify/models/components";

let value: ManagedVia = "api";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "api" | Unrecognized<string>
```