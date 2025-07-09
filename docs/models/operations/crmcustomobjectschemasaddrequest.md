# CrmCustomObjectSchemasAddRequest

## Example Usage

```typescript
import { CrmCustomObjectSchemasAddRequest } from "@apideck/unify/models/operations";

let value: CrmCustomObjectSchemasAddRequest = {
  serviceId: "salesforce",
  customObjectSchema: {
    name: "project",
    description: "This schema defines a project custom object",
    fields: [
      {
        id: "field_123",
        name: "project_name",
        description: "Name of the project",
        type: "string",
        required: true,
        options: [
          {
            value: "option1",
            label: "Option 1",
          },
        ],
        defaultValue: "New Project",
      },
    ],
    visible: true,
    active: true,
    passThrough: [
      {
        serviceId: "<id>",
        extendPaths: [
          {
            path: "$.nested.property",
            value: {
              "TaxClassificationRef": {
                "value": "EUC-99990201-V1-00020000",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `customObjectSchema`                                                                                                                          | [components.CustomObjectSchemaInput](../../models/components/customobjectschemainput.md)                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |