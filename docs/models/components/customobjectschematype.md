# CustomObjectSchemaType

## Example Usage

```typescript
import { CustomObjectSchemaType } from "@apideck/unify/models/components";

let value: CustomObjectSchemaType = "string";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"string" | "number" | "integer" | "boolean" | "date" | "datetime" | "currency" | "email" | "phone" | "reference" | "select" | "multiselect" | Unrecognized<string>
```