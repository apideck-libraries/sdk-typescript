# ContactType

The type of the contact.

## Example Usage

```typescript
import { ContactType } from "@apideck/unify/models/components";

let value: ContactType = "personal";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"customer" | "supplier" | "employee" | "personal" | Unrecognized<string>
```