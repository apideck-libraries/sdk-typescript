# TrackingCategoriesMode

The mode of tracking categories for the company on transactions

## Example Usage

```typescript
import { TrackingCategoriesMode } from "@apideck/unify/models/components";

let value: TrackingCategoriesMode = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"transaction" | "line" | "both" | "disabled" | Unrecognized<string>
```