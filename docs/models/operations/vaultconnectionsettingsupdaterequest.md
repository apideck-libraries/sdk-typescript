# VaultConnectionSettingsUpdateRequest

## Example Usage

```typescript
import { VaultConnectionSettingsUpdateRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionSettingsUpdateRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
  resource: "leads",
  connection: {
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
                label: "General Channel",
                value: true,
              },
            ],
            value: 10.5,
          },
        ],
      },
    ],
    customMappings: [
      {
        value: "$.root.training.first_aid",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `consumerId`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | ID of the consumer which you want to get or push data from               | test-consumer                                                            |
| `appId`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The ID of your Unify application                                         | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                  |
| `serviceId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Service ID of the resource to return                                     | pipedrive                                                                |
| `unifiedApi`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Unified API                                                              | crm                                                                      |
| `resource`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Name of the resource (plural)                                            | leads                                                                    |
| `connection`                                                             | [components.ConnectionInput](../../models/components/connectioninput.md) | :heavy_check_mark:                                                       | Fields that need to be updated on the resource                           |                                                                          |