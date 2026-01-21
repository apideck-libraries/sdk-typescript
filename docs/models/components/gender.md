# Gender

The gender represents the gender identity of a person.

## Example Usage

```typescript
import { Gender } from "@apideck/unify/models/components";

let value: Gender = "male";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"male" | "female" | "unisex" | "other" | "not_specified" | Unrecognized<string>
```