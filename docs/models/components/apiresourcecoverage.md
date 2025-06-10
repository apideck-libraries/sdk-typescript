# ApiResourceCoverage

## Example Usage

```typescript
import { ApiResourceCoverage } from "@apideck/unify/models/components";

let value: ApiResourceCoverage = {
  id: "companies",
  name: "Companies",
  coverage: [
    {
      downstreamId: "accounts",
      downstreamName: "Accounts",
      pagination: {
        mode: "native",
      },
      supportedOperations: [
        "all",
        "one",
        "add",
        "update",
        "delete",
      ],
      supportedFilters: [
        "name",
        "email",
      ],
      supportedSortBy: [
        "updated_at",
        "created_at",
        "name",
      ],
      supportedFields: [
        {
          unifiedProperty: "owner_id",
          childProperties: [
            {
              unifiedProperty: "owner_id",
            },
          ],
        },
      ],
      supportedListFields: [
        {
          unifiedProperty: "owner_id",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | ID of the resource, typically a lowercased version of name.              | companies                                                                |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name of the resource (plural)                                            | Companies                                                                |
| `status`                                                                 | [components.ResourceStatus](../../models/components/resourcestatus.md)   | :heavy_minus_sign:                                                       | Status of the resource. Resources with status live or beta are callable. |                                                                          |
| `coverage`                                                               | [components.Coverage](../../models/components/coverage.md)[]             | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |