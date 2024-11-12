# VaultConnectionsAllRequest

## Example Usage

```typescript
import { VaultConnectionsAllRequest } from "apideck/models/operations";

let value: VaultConnectionsAllRequest = {
  api: "crm",
  configured: true,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `api`                                                          | *string*                                                       | :heavy_minus_sign:                                             | Scope results to Unified API                                   | crm                                                            |
| `configured`                                                   | *boolean*                                                      | :heavy_minus_sign:                                             | Scopes results to connections that have been configured or not | true                                                           |