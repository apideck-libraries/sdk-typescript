# AttachmentReferenceType

## Example Usage

```typescript
import { AttachmentReferenceType } from "@apideck/unify/models/components";

let value: AttachmentReferenceType = "invoice";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"invoice" | "bill" | "expense" | "quote" | Unrecognized<string>
```