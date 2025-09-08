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
              label: "General Channel",
              optionType: "simple",
            },
          ],
          value: "GC5000 series",
        },
      ],
    },
  ],
  customMappings: [
    {
      value: "$.root.training.first_aid",
    },
  ],
  consentState: "granted",
  latestConsent: {
    granted: true,
    resources: {
      "hris.employees": {
        "id": {
          read: true,
          write: false,
        },
        "first_name": {
          read: true,
          write: true,
        },
        "last_name": {
          read: true,
          write: true,
        },
        "email": {
          read: true,
          write: true,
        },
        "addresses[].street": {
          read: true,
          write: false,
        },
        "addresses[].city": {
          read: true,
          write: false,
        },
        "employment.job_title": {
          read: true,
          write: true,
        },
        "custom_fields[].employee_number": {
          read: true,
          write: false,
        },
      },
      "hris.departments": {
        "id": {
          read: true,
          write: false,
        },
        "name": {
          read: true,
          write: true,
        },
        "code": {
          read: true,
          write: false,
        },
      },
    },
  },
  applicationDataScopes: {
    enabled: true,
    resources: {
      "hris.employees": {
        "id": {
          read: true,
          write: false,
        },
        "first_name": {
          read: true,
          write: true,
        },
        "last_name": {
          read: true,
          write: true,
        },
        "email": {
          read: true,
          write: true,
        },
        "addresses[].street": {
          read: true,
          write: false,
        },
        "addresses[].city": {
          read: true,
          write: false,
        },
        "employment.job_title": {
          read: true,
          write: true,
        },
        "custom_fields[].employee_number": {
          read: true,
          write: false,
        },
      },
      "hris.departments": {
        "id": {
          read: true,
          write: false,
        },
        "name": {
          read: true,
          write: true,
        },
        "code": {
          read: true,
          write: false,
        },
      },
    },
  },
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
| `consentState`                                                                                                    | [components.ConsentState](../../models/components/consentstate.md)                                                | :heavy_minus_sign:                                                                                                | The current consent state of the connection                                                                       | granted                                                                                                           |
| `latestConsent`                                                                                                   | [components.ConsentRecordInput](../../models/components/consentrecordinput.md)                                    | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `applicationDataScopes`                                                                                           | [components.DataScopesInput](../../models/components/datascopesinput.md)                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |                                                                                                                   |