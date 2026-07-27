# ConnectionMetadata

Attach your own consumer specific metadata

## Example Usage

```typescript
import { ConnectionMetadata } from "@apideck/unify/models/components";

let value: ConnectionMetadata = {
  additionalProperties: {
    "account": {
      "name": "My Company",
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
    },
    "plan": "enterprise",
  },
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                       | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | Normalized identifier of the authorized organization, copied from the connector-specific setting (e.g. Xero tenant_id, QuickBooks realm_id, NetSuite account_id). | 4bfe0fce-9257-4a1a-a691-5eed6c957f9a                                                                                                                              |
| `additionalProperties`                                                                                                                                            | Record<string, *any*>                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               | {<br/>"account": {<br/>"name": "My Company",<br/>"id": "c01458a5-7276-41ce-bc19-639906b0450a"<br/>},<br/>"plan": "enterprise"<br/>}                               |