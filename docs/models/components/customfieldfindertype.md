# CustomFieldFinderType

The declared data type of the custom field. Only returned by connectors that can read the field's definition; omitted otherwise.

## Example Usage

```typescript
import { CustomFieldFinderType } from "@apideck/unify/models/components";

let value: CustomFieldFinderType = "select";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "checkbox" | "tel" | "email" | "url" | "textarea" | "select" | "filtered-select" | "multi-select" | "datetime" | "date" | "time" | "number" | "password" | Unrecognized<string>
```