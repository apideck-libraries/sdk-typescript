# CustomObjectSchemaType

## Example Usage

```typescript
import { CustomObjectSchemaType } from "@apideck/unify/models/components";

let value: CustomObjectSchemaType = "string";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"string" | "number" | "integer" | "boolean" | "date" | "datetime" | "currency" | "email" | "phone" | "reference" | "select" | "multiselect" | Unrecognized<string>
```