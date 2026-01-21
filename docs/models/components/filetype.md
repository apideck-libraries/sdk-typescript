# FileType

The type of resource. Could be file, folder or url

## Example Usage

```typescript
import { FileType } from "@apideck/unify/models/components";

let value: FileType = "file";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"file" | "folder" | "url" | Unrecognized<string>
```