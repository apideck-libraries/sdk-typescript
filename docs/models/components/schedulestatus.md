# ScheduleStatus

Current status of project schedule compared to plan

## Example Usage

```typescript
import { ScheduleStatus } from "@apideck/unify/models/components";

let value: ScheduleStatus = "on_schedule";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ahead_of_schedule" | "on_schedule" | "behind_schedule" | "critical_delay" | Unrecognized<string>
```