# LinkedResources

## Example Usage

```typescript
import { LinkedResources } from "apideck/models/components";

let value: LinkedResources = {
  id: "companies",
  unifiedProperty: "owner_id",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_minus_sign:                                          | ID of the resource, typically a lowercased version of name. | companies                                                   |
| `unifiedProperty`                                           | *string*                                                    | :heavy_minus_sign:                                          | Name of the property in our Unified API.                    | owner_id                                                    |