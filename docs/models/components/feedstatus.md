# FeedStatus

Current status of the bank feed.

## Example Usage

```typescript
import { FeedStatus } from "@apideck/unify/models/components";

let value: FeedStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "rejected" | Unrecognized<string>
```