# ConnectorResource

## Example Usage

```typescript
import { ConnectorResource } from "apideck/models/components";

let value: ConnectorResource = {
  id: "companies",
  name: "Companies",
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
  downstreamUnsupportedOperations: [
    "upload",
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
  supportedFields: [],
  supportedListFields: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | ID of the resource, typically a lowercased version of name.                                              | companies                                                                                                |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Name of the resource (plural)                                                                            | Companies                                                                                                |
| `downstreamId`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | ID of the resource in the Connector's API (downstream)                                                   | accounts                                                                                                 |
| `downstreamName`                                                                                         | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Name of the resource in the Connector's API (downstream)                                                 | Accounts                                                                                                 |
| `status`                                                                                                 | [components.ResourceStatus](../../models/components/resourcestatus.md)                                   | :heavy_minus_sign:                                                                                       | Status of the resource. Resources with status live or beta are callable.                                 |                                                                                                          |
| `paginationSupported`                                                                                    | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. |                                                                                                          |
| `pagination`                                                                                             | [components.PaginationCoverage](../../models/components/paginationcoverage.md)                           | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `customFieldsSupported`                                                                                  | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Indicates if custom fields are supported on this resource.                                               |                                                                                                          |
| `supportedOperations`                                                                                    | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | List of supported operations on the resource.                                                            | [<br/>"all",<br/>"one",<br/>"add",<br/>"update",<br/>"delete"<br/>]                                      |
| `downstreamUnsupportedOperations`                                                                        | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | List of operations that are not supported on the downstream.                                             | [<br/>"upload"<br/>]                                                                                     |
| `supportedFilters`                                                                                       | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | Supported filters on the list endpoint of the resource.                                                  | [<br/>"name",<br/>"email"<br/>]                                                                          |
| `supportedSortBy`                                                                                        | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | Supported sorting properties on the list endpoint of the resource.                                       | [<br/>"updated_at",<br/>"created_at",<br/>"name"<br/>]                                                   |
| `supportedFields`                                                                                        | [components.SupportedProperty](../../models/components/supportedproperty.md)[]                           | :heavy_minus_sign:                                                                                       | Supported fields on the detail endpoint.                                                                 |                                                                                                          |
| `supportedListFields`                                                                                    | [components.SupportedProperty](../../models/components/supportedproperty.md)[]                           | :heavy_minus_sign:                                                                                       | Supported fields on the list endpoint.                                                                   |                                                                                                          |