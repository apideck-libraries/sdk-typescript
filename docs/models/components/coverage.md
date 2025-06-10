# Coverage

## Example Usage

```typescript
import { Coverage } from "@apideck/unify/models/components";

let value: Coverage = {
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `downstreamId`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | ID of the resource in the Connector's API (downstream)                                                   | accounts                                                                                                 |
| `downstreamName`                                                                                         | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Name of the resource in the Connector's API (downstream)                                                 | Accounts                                                                                                 |
| `paginationSupported`                                                                                    | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. |                                                                                                          |
| `pagination`                                                                                             | [components.PaginationCoverage](../../models/components/paginationcoverage.md)                           | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `supportedOperations`                                                                                    | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | List of supported operations on the resource.                                                            | [<br/>"all",<br/>"one",<br/>"add",<br/>"update",<br/>"delete"<br/>]                                      |
| `supportedFilters`                                                                                       | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | Supported filters on the list endpoint of the resource.                                                  | [<br/>"name",<br/>"email"<br/>]                                                                          |
| `supportedSortBy`                                                                                        | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | Supported sorting properties on the list endpoint of the resource.                                       | [<br/>"updated_at",<br/>"created_at",<br/>"name"<br/>]                                                   |
| `supportedFields`                                                                                        | [components.SupportedProperty](../../models/components/supportedproperty.md)[]                           | :heavy_minus_sign:                                                                                       | Supported fields on the detail endpoint.                                                                 |                                                                                                          |
| `supportedListFields`                                                                                    | [components.SupportedProperty](../../models/components/supportedproperty.md)[]                           | :heavy_minus_sign:                                                                                       | Supported fields on the list endpoint.                                                                   |                                                                                                          |