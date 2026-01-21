# JobStatus

The status of the job.

## Example Usage

```typescript
import { JobStatus } from "@apideck/unify/models/components";

let value: JobStatus = "completed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "internal" | "published" | "completed" | "placed" | "on-hold" | "private" | "accepting_candidates" | "open" | "closed" | "archived" | Unrecognized<string>
```