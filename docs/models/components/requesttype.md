# RequestType

The type of request

## Example Usage

```typescript
import { RequestType } from "@apideck/unify/models/components";

let value: RequestType = "vacation";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"vacation" | "sick" | "personal" | "jury_duty" | "volunteer" | "bereavement" | "other" | Unrecognized<string>
```