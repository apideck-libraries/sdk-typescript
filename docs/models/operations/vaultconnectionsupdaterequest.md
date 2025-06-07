# VaultConnectionsUpdateRequest

## Example Usage

```typescript
import { VaultConnectionsUpdateRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionsUpdateRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `consumerId`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | ID of the consumer which you want to get or push data from               | test-consumer                                                            |
| `appId`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The ID of your Unify application                                         | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                  |
| `serviceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Service ID of the resource to return                                     | pipedrive                                                                |
| `unifiedApi`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Unified API                                                              | crm                                                                      |
| `connection`                                                             | [components.ConnectionInput](../../models/components/connectioninput.md) | :heavy_check_mark:                                                       | Fields that need to be updated on the resource                           |                                                                          |