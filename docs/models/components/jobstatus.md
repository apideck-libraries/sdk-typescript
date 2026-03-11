# JobStatus

The status of the job.

## Example Usage

```typescript
import { JobStatus } from "@apideck/unify/models/components";

let value: JobStatus = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "internal" | "published" | "completed" | "placed" | "on-hold" | "private" | "accepting_candidates" | "open" | "closed" | "archived" | Unrecognized<string>
```