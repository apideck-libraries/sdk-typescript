# FileType

The type of resource. Could be file, folder or url

## Example Usage

```typescript
import { FileType } from "@apideck/unify/models/components";

let value: FileType = "file";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"file" | "folder" | "url" | Unrecognized<string>
```