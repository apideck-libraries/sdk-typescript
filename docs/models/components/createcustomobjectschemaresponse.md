# CreateCustomObjectSchemaResponse

Custom object schema created

## Example Usage

```typescript
import { CreateCustomObjectSchemaResponse } from "@apideck/unify/models/components";

let value: CreateCustomObjectSchemaResponse = {
  statusCode: 201,
  status: "Created",
  service: "zoho-crm",
  resource: "custom-object-schemas",
  operation: "add",
  data: {
    id: "cos_12345",
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
    createdBy: "12345",
    updatedBy: "12345",
    updatedAt: "2020-09-30T07:43:32.000Z",
    createdAt: "2020-09-30T07:43:32.000Z",
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status Code                                                      | 201                                                                            |
| `status`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status                                                           | Created                                                                        |
| `service`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Apideck ID of service provider                                                 | zoho-crm                                                                       |
| `resource`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Unified API resource name                                                      | custom-object-schemas                                                          |
| `operation`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Operation performed                                                            | add                                                                            |
| `data`                                                                         | [components.CustomObjectSchema](../../models/components/customobjectschema.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `raw`                                                                          | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | Raw response from the integration when raw=true query param is provided        |                                                                                |