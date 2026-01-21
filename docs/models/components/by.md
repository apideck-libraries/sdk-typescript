# By

The field on which to sort the Bills

## Example Usage

```typescript
import { By } from "@apideck/unify/models/components";

let value: By = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"updated_at" | "created_at" | Unrecognized<string>
```