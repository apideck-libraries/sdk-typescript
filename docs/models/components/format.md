# Format

Format of the doc.

## Example Usage

```typescript
import { Format } from "@apideck/unify/models/components";

let value: Format = "markdown";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"markdown" | Unrecognized<string>
```