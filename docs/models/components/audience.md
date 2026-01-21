# Audience

Audience for the doc.

## Example Usage

```typescript
import { Audience } from "@apideck/unify/models/components";

let value: Audience = "application_owner";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"application_owner" | "consumer" | Unrecognized<string>
```