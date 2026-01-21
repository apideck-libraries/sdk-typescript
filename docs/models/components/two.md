# Two

Wildcard indicating all resources and fields when Data Scopes is disabled

## Example Usage

```typescript
import { Two } from "@apideck/unify/models/components";

let value: Two = "*";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"*" | Unrecognized<string>
```