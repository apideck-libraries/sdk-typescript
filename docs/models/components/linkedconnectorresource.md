# LinkedConnectorResource

## Example Usage

```typescript
import { LinkedConnectorResource } from "apideck/models/components";

let value: LinkedConnectorResource = {
  id: "companies",
  name: "Companies",
  downstreamId: "accounts",
  downstreamName: "Accounts",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | ID of the resource, typically a lowercased version of name.              | companies                                                                |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name of the resource (plural)                                            | Companies                                                                |
| `status`                                                                 | [components.ResourceStatus](../../models/components/resourcestatus.md)   | :heavy_minus_sign:                                                       | Status of the resource. Resources with status live or beta are callable. |                                                                          |
| `downstreamId`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | ID of the resource in the Connector's API (downstream)                   | accounts                                                                 |
| `downstreamName`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | Name of the resource in the Connector's API (downstream)                 | Accounts                                                                 |