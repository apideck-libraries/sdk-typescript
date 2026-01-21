# CollectionsSortBy

The field on which to sort the Collections

## Example Usage

```typescript
import { CollectionsSortBy } from "@apideck/unify/models/components";

let value: CollectionsSortBy = "name";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"name" | "created_at" | "updated_at" | Unrecognized<string>
```