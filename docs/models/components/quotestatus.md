# QuoteStatus

Quote status

## Example Usage

```typescript
import { QuoteStatus } from "@apideck/unify/models/components";

let value: QuoteStatus = "draft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "sent" | "accepted" | "rejected" | "expired" | "converted" | "void" | "deleted" | Unrecognized<string>
```