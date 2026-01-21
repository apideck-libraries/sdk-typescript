# Visibility

The visibility of the job

## Example Usage

```typescript
import { Visibility } from "@apideck/unify/models/components";

let value: Visibility = "internal";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "public" | "internal" | Unrecognized<string>
```