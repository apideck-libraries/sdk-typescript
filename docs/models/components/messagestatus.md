# MessageStatus

Status of the delivery of the message.

## Example Usage

```typescript
import { MessageStatus } from "@apideck/unify/models/components";

let value: MessageStatus = "sent";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"accepted" | "scheduled" | "canceled" | "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "read" | Unrecognized<string>
```