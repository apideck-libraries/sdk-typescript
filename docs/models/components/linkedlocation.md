# LinkedLocation

## Example Usage

```typescript
import { LinkedLocation } from "@apideck/unify/models/components";

let value: LinkedLocation = {
  id: "123456",
  displayId: "123456",
  name: "New York Office",
  downstreamId: "12345",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_minus_sign:                        | The unique identifier for the location.   | 123456                                    |
| `displayId`                               | *string*                                  | :heavy_minus_sign:                        | Id to be displayed.                       | 123456                                    |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | The name of the location.                 | New York Office                           |
| `downstreamId`                            | *string*                                  | :heavy_minus_sign:                        | The third-party API ID of original entity | 12345                                     |