# ConnectorOauthScopes

OAuth scopes required for the connector. Add these scopes to your OAuth app.

## Example Usage

```typescript
import { ConnectorOauthScopes } from "apideck/models/components";

let value: ConnectorOauthScopes = {
  id: "contacts:all",
  label: "Read/write on the Contacts resource",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_minus_sign:                  | ID of the OAuth scope.              | contacts:all                        |
| `label`                             | *string*                            | :heavy_minus_sign:                  | Label of the OAuth scope.           | Read/write on the Contacts resource |