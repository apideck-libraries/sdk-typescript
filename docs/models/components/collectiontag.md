# CollectionTag

## Example Usage

```typescript
import { CollectionTag } from "@apideck/unify/models/components";

let value: CollectionTag = {
  id: "12345",
  name: "User Experience",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | A unique identifier for an object.                                                | 12345                                                                             |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The name of the tag.                                                              | User Experience                                                                   |
| `customMappings`                                                                  | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | When custom mappings are configured on the resource, the result is included here. |                                                                                   |