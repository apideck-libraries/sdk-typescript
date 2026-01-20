# LinkedDepartment

## Example Usage

```typescript
import { LinkedDepartment } from "@apideck/unify/models/components";

let value: LinkedDepartment = {
  id: "12345",
  displayId: "123456",
  name: "Acme Inc.",
  downstreamId: "12345",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_minus_sign:                        | A unique identifier for an object.        | 12345                                     |
| `displayId`                               | *string*                                  | :heavy_minus_sign:                        | Id to be displayed.                       | 123456                                    |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | The name of the resource.                 | Acme Inc.                                 |
| `downstreamId`                            | *string*                                  | :heavy_minus_sign:                        | The third-party API ID of original entity | 12345                                     |