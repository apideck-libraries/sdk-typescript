# FormFieldType

## Example Usage

```typescript
import { FormFieldType } from "@apideck/unify/models/components";

let value: FormFieldType = "select";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "checkbox" | "tel" | "email" | "url" | "textarea" | "select" | "filtered-select" | "multi-select" | "datetime" | "date" | "time" | "number" | "password" | Unrecognized<string>
```