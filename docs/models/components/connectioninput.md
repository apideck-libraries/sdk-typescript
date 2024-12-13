# ConnectionInput

## Example Usage

```typescript
import { ConnectionInput } from "@apideck/unify/models/components";

let value: ConnectionInput = {
  enabled: true,
  settings: {
    "instance_url": "https://eu28.salesforce.com",
    "api_key": "12345xxxxxx",
  },
  metadata: {
    "account": {
      "name": "My Company",
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
    },
    "plan": "enterprise",
  },
  configuration: [
    {
      resource: "leads",
      defaults: [
        {
          id: "ProductInterest",
          options: [
            {
              id: "1234",
              label: "General Channel",
              options: [
                {
                  label: "General Channel",
                  value: true,
                },
              ],
            },
          ],
          value: [
            10.5,
          ],
        },
      ],
    },
  ],
  customMappings: [
    {
      value: "$.root.training.first_aid",
    },
  ],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                         | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API. | true                                                                                                              |
| `settings`                                                                                                        | Record<string, *any*>                                                                                             | :heavy_minus_sign:                                                                                                | Connection settings. Values will persist to `form_fields` with corresponding id                                   | {<br/>"instance_url": "https://eu28.salesforce.com",<br/>"api_key": "12345xxxxxx"<br/>}                           |
| `metadata`                                                                                                        | Record<string, *any*>                                                                                             | :heavy_minus_sign:                                                                                                | Attach your own consumer specific metadata                                                                        | {<br/>"account": {<br/>"name": "My Company",<br/>"id": "c01458a5-7276-41ce-bc19-639906b0450a"<br/>},<br/>"plan": "enterprise"<br/>} |
| `configuration`                                                                                                   | [components.ConnectionConfiguration](../../models/components/connectionconfiguration.md)[]                        | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `customMappings`                                                                                                  | [components.CustomMappingInput](../../models/components/custommappinginput.md)[]                                  | :heavy_minus_sign:                                                                                                | List of custom mappings configured for this connection                                                            |                                                                                                                   |