# VaultConnectionsImportRequest

## Example Usage

```typescript
import { VaultConnectionsImportRequest } from "apideck/models/operations";

let value: VaultConnectionsImportRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
  connectionImportData: {
    credentials: {
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      issuedAt: new Date("2020-01-01T00:00:00Z"),
      expiresIn: 3600,
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
| `serviceId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Service ID of the resource to return                                               | pipedrive                                                                          |
| `unifiedApi`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | Unified API                                                                        | crm                                                                                |
| `connectionImportData`                                                             | [components.ConnectionImportData](../../models/components/connectionimportdata.md) | :heavy_check_mark:                                                                 | Fields that need to be persisted on the resource                                   |                                                                                    |