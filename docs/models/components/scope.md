# Scope

The scope of the shared link.

## Example Usage

```typescript
import { Scope } from "@apideck/unify/models/components";

let value: Scope = "company";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "company" | Unrecognized<string>
```