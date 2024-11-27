# ConnectorConnectorResourcesOneRequest

## Example Usage

```typescript
import { ConnectorConnectorResourcesOneRequest } from "@apideck/sdk/models/operations";

let value: ConnectorConnectorResourcesOneRequest = {
  id: "<id>",
  resourceId: "<id>",
  unifiedApi: "crm",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | ID of the record you are acting upon.                                                                   |                                                                                                         |
| `resourceId`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | ID of the resource you are acting upon.                                                                 |                                                                                                         |
| `unifiedApi`                                                                                            | [components.UnifiedApiId](../../models/components/unifiedapiid.md)                                      | :heavy_minus_sign:                                                                                      | Specify unified API for the connector resource. This is useful when a resource appears in multiple APIs | crm                                                                                                     |