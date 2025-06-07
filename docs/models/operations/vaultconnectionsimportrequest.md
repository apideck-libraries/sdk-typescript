# VaultConnectionsImportRequest

## Example Usage

```typescript
import { VaultConnectionsImportRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionsImportRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `consumerId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | ID of the consumer which you want to get or push data from                         | test-consumer                                                                      |
| `appId`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of your Unify application                                                   | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                            |
| `serviceId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Service ID of the resource to return                                               | pipedrive                                                                          |
| `unifiedApi`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | Unified API                                                                        | crm                                                                                |
| `connectionImportData`                                                             | [components.ConnectionImportData](../../models/components/connectionimportdata.md) | :heavy_check_mark:                                                                 | Fields that need to be persisted on the resource                                   |                                                                                    |