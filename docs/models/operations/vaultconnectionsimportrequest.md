# VaultConnectionsImportRequest

## Example Usage

```typescript
import { VaultConnectionsImportRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionsImportRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
  connectionImportData: {
    credentials: {
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    },
    settings: {},
    metadata: {
      "account": {
        "name": "My Company",
        "id": "c01458a5-7276-41ce-bc19-639906b0450a",
      },
      "plan": "enterprise",
    },
  },
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