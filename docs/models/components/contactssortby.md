# ContactsSortBy

The field on which to sort the Contacts

## Example Usage

```typescript
import { ContactsSortBy } from "@apideck/unify/models/components";

let value: ContactsSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | "name" | "first_name" | "last_name" | "email" | Unrecognized<string>
```