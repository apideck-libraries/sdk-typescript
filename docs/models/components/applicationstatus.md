# ApplicationStatus

## Example Usage

```typescript
import { ApplicationStatus } from "@apideck/unify/models/components";

let value: ApplicationStatus = "open";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "rejected" | "hired" | "converted" | "other" | Unrecognized<string>
```