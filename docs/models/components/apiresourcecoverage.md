# ApiResourceCoverage

## Example Usage

```typescript
import { ApiResourceCoverage } from "@apideck/unify/models/components";

let value: ApiResourceCoverage = {
  id: "companies",
  name: "Companies",
  coverage: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | ID of the resource, typically a lowercased version of name.              | companies                                                                |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name of the resource (plural)                                            | Companies                                                                |
| `status`                                                                 | [components.ResourceStatus](../../models/components/resourcestatus.md)   | :heavy_minus_sign:                                                       | Status of the resource. Resources with status live or beta are callable. |                                                                          |
| `coverage`                                                               | [components.Coverage](../../models/components/coverage.md)[]             | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |