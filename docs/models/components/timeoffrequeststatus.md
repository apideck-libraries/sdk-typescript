# TimeOffRequestStatus

Time off request status to filter on

## Example Usage

```typescript
import { TimeOffRequestStatus } from "@apideck/unify/models/components";

let value: TimeOffRequestStatus = "requested";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"requested" | "approved" | "declined" | "cancelled" | "deleted" | "other" | Unrecognized<string>
```