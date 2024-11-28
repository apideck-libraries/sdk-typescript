# SharedLinkTarget

## Example Usage

```typescript
import { SharedLinkTarget } from "@apideck/unify/models/components";

let value: SharedLinkTarget = {
  id: "12345",
  name: "sample.jpg",
  type: "file",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | A unique identifier for an object.                         | 12345                                                      |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The name of the file                                       | sample.jpg                                                 |
| `type`                                                     | [components.FileType](../../models/components/filetype.md) | :heavy_minus_sign:                                         | The type of resource. Could be file, folder or url         | file                                                       |