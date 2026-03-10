# ProjectStatus

Status of projects to filter by

## Example Usage

```typescript
import { ProjectStatus } from "@apideck/unify/models/components";

let value: ProjectStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "completed" | "on_hold" | "cancelled" | "draft" | "in_progress" | "approved" | "other" | Unrecognized<string>
```