# CommentsSortBy

The field on which to sort the Comments

## Example Usage

```typescript
import { CommentsSortBy } from "@apideck/unify/models/components";

let value: CommentsSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```