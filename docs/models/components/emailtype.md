# EmailType

Email type

## Example Usage

```typescript
import { EmailType } from "@apideck/unify/models/components";

let value: EmailType = "primary";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other" | Unrecognized<string>
```