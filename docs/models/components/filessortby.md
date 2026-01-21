# FilesSortBy

The field on which to sort the Files

## Example Usage

```typescript
import { FilesSortBy } from "@apideck/unify/models/components";

let value: FilesSortBy = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | "name" | Unrecognized<string>
```