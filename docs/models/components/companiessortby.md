# CompaniesSortBy

The field on which to sort the Companies

## Example Usage

```typescript
import { CompaniesSortBy } from "@apideck/unify/models/components";

let value: CompaniesSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | "name" | Unrecognized<string>
```