# SortDirection

The direction in which to sort the results

## Example Usage

```typescript
import { SortDirection } from "@apideck/unify/models/components";

let value: SortDirection = "asc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"asc" | "desc" | Unrecognized<string>
```