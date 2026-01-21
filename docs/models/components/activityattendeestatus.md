# ActivityAttendeeStatus

Status of the attendee

## Example Usage

```typescript
import { ActivityAttendeeStatus } from "@apideck/unify/models/components";

let value: ActivityAttendeeStatus = "accepted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accepted" | "tentative" | "declined" | Unrecognized<string>
```