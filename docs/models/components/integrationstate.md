# IntegrationState

The current state of the Integration.

## Example Usage

```typescript
import { IntegrationState } from "@apideck/unify/models/components";

let value: IntegrationState = "configured";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"disabled" | "needs_configuration" | "configured" | Unrecognized<string>
```