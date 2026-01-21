# PhoneNumberType

The type of phone number

## Example Usage

```typescript
import { PhoneNumberType } from "@apideck/unify/models/components";

let value: PhoneNumberType = "primary";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "billing" | "other" | Unrecognized<string>
```