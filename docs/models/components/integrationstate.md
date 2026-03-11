# IntegrationState

The current state of the Integration.

## Example Usage

```typescript
import { IntegrationState } from "@apideck/unify/models/components";

let value: IntegrationState = "configured";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"disabled" | "needs_configuration" | "configured" | Unrecognized<string>
```