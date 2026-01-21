# ProjectType

Type or category of the project

## Example Usage

```typescript
import { ProjectType } from "@apideck/unify/models/components";

let value: ProjectType = "client_project";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"client_project" | "internal_project" | "maintenance" | "research_development" | "training" | "other" | Unrecognized<string>
```