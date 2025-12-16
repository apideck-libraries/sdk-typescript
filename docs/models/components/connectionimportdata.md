# ConnectionImportData

## Example Usage

```typescript
import { ConnectionImportData } from "@apideck/unify/models/components";

let value: ConnectionImportData = {
  credentials: {
    refreshToken: "<refresh_token>",
    accessToken: "<access_token>",
  },
  settings: {
    "instance_url": "https://eu28.salesforce.com",
  },
  metadata: {
    "account": {
      "name": "My Company",
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
    },
    "plan": "enterprise",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `credentials`                                                                                               | [components.Credentials](../../models/components/credentials.md)                                            | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | {<br/>"access_token": "\u003caccess_token\u003e",<br/>"refresh_token": "\u003crefresh_token\u003e"<br/>}    |
| `settings`                                                                                                  | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | Connection settings. Values will persist to `form_fields` with corresponding id                             | {<br/>"instance_url": "https://eu28.salesforce.com"<br/>}                                                   |
| `metadata`                                                                                                  | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | Attach your own consumer specific metadata                                                                  | {<br/>"account": {<br/>"name": "My Company",<br/>"id": "c01458a5-7276-41ce-bc19-639906b0450a"<br/>},<br/>"plan": "enterprise"<br/>} |