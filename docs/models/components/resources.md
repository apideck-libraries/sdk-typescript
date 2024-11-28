# Resources

## Example Usage

```typescript
import { Resources } from "@apideck/unify/models/components";

let value: Resources = {
  id: "companies",
  name: "Companies",
  excludedFromCoverage: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | ID of the resource, typically a lowercased version of its name.          | companies                                                                |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name of the resource (plural)                                            | Companies                                                                |
| `status`                                                                 | [components.ResourceStatus](../../models/components/resourcestatus.md)   | :heavy_minus_sign:                                                       | Status of the resource. Resources with status live or beta are callable. |                                                                          |
| `excludedFromCoverage`                                                   | *boolean*                                                                | :heavy_minus_sign:                                                       | Exclude from mapping coverage                                            | false                                                                    |