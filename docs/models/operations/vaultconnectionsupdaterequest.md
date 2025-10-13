# VaultConnectionsUpdateRequest

## Example Usage

```typescript
import { VaultConnectionsUpdateRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionsUpdateRequest = {
  serviceId: "pipedrive",
  unifiedApi: "crm",
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
                options: [
                  {
                    label: "General Channel",
                    value: "general",
                    optionType: "simple",
                  },
                ],
                optionType: "group",
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
| `connection`                                                             | [components.ConnectionInput](../../models/components/connectioninput.md) | :heavy_check_mark:                                                       | Fields that need to be updated on the resource                           |                                                                          |