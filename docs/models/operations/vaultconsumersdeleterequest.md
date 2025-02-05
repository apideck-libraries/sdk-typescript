# VaultConsumersDeleteRequest

## Example Usage

```typescript
import { VaultConsumersDeleteRequest } from "@apideck/unify/models/operations";

let value: VaultConsumersDeleteRequest = {
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  consumerId: "test_user_id",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `appId`                                 | *string*                                | :heavy_minus_sign:                      | The ID of your Unify application        | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX |
| `consumerId`                            | *string*                                | :heavy_check_mark:                      | ID of the consumer to return            | test_user_id                            |