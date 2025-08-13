# LinkedAttachment

## Example Usage

```typescript
import { LinkedAttachment } from "@apideck/unify/models/components";

let value: LinkedAttachment = {
  name: "sample.jpg",
  mimeType: "image/jpeg",
  isCompressed: false,
  encoding: "base64",
  content: "data:image/jpeg;base64,...",
  notes: "A sample image",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `name`                           | *string*                         | :heavy_minus_sign:               | The name of the file             | sample.jpg                       |
| `mimeType`                       | *string*                         | :heavy_minus_sign:               | The MIME type of the file.       | image/jpeg                       |
| `isCompressed`                   | *boolean*                        | :heavy_minus_sign:               | Whether the file is c ompressed. | false                            |
| `encoding`                       | *string*                         | :heavy_minus_sign:               | The encoding of the file.        | base64                           |
| `content`                        | *string*                         | :heavy_minus_sign:               | The content of the file.         | data:image/jpeg;base64,...       |
| `notes`                          | *string*                         | :heavy_minus_sign:               | The notes of the file.           | A sample image                   |