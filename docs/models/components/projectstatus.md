# ProjectStatus

Status of projects to filter by

## Example Usage

```typescript
import { ProjectStatus } from "@apideck/unify/models/components";

let value: ProjectStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "completed" | "on_hold" | "cancelled" | "draft" | "in_progress" | "approved" | "other" | Unrecognized<string>
```