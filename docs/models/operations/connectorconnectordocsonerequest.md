# ConnectorConnectorDocsOneRequest

## Example Usage

```typescript
import { ConnectorConnectorDocsOneRequest } from "@apideck/unify/models/operations";

let value: ConnectorConnectorDocsOneRequest = {
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  id: "<id>",
  docId: "application_owner+oauth_credentials",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `appId`                                 | *string*                                | :heavy_minus_sign:                      | The ID of your Unify application        | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX |
| `id`                                    | *string*                                | :heavy_check_mark:                      | ID of the record you are acting upon.   |                                         |
| `docId`                                 | *string*                                | :heavy_check_mark:                      | ID of the Doc                           | application_owner+oauth_credentials     |