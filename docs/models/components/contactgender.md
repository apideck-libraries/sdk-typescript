# ContactGender

The gender of the contact.

## Example Usage

```typescript
import { ContactGender } from "@apideck/unify/models/components";

let value: ContactGender = "female";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"male" | "female" | "unisex" | Unrecognized<string>
```