# MessageStatus

Status of the delivery of the message.

## Example Usage

```typescript
import { MessageStatus } from "@apideck/unify/models/components";

let value: MessageStatus = "sent";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accepted" | "scheduled" | "canceled" | "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "read" | Unrecognized<string>
```