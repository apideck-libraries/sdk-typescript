# SupportedResourceCategories

## Example Usage

```typescript
import { SupportedResourceCategories } from "@apideck/unify/models/components";

let value: SupportedResourceCategories = {
  name: "<value>",
  resources: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | Category name.                           |
| `resources`                              | *string*[]                               | :heavy_check_mark:                       | Resource ids belonging to this category. |