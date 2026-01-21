# TimeOffRequestStatusStatus

The status of the time off request.

## Example Usage

```typescript
import { TimeOffRequestStatusStatus } from "@apideck/unify/models/components";

let value: TimeOffRequestStatusStatus = "approved";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"requested" | "approved" | "declined" | "cancelled" | "deleted" | "other" | Unrecognized<string>
```