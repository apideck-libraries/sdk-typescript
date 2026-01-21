# MessageType

Set to sms for SMS messages and mms for MMS messages.

## Example Usage

```typescript
import { MessageType } from "@apideck/unify/models/components";

let value: MessageType = "sms";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sms" | "mms" | Unrecognized<string>
```