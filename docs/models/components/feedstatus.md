# FeedStatus

Current status of the bank feed.

## Example Usage

```typescript
import { FeedStatus } from "@apideck/unify/models/components";

let value: FeedStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "rejected" | Unrecognized<string>
```