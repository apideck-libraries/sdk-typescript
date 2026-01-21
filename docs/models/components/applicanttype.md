# ApplicantType

The type of website

## Example Usage

```typescript
import { ApplicantType } from "@apideck/unify/models/components";

let value: ApplicantType = "primary";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"primary" | "secondary" | "work" | "personal" | "other" | Unrecognized<string>
```