# ConnectorSettingType

## Example Usage

```typescript
import { ConnectorSettingType } from "@apideck/unify/models/components";

let value: ConnectorSettingType = "select";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "checkbox" | "tel" | "email" | "url" | "textarea" | "select" | "filtered-select" | "multi-select" | "datetime" | "date" | "time" | "number" | "password" | Unrecognized<string>
```