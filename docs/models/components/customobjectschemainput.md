# CustomObjectSchemaInput

## Example Usage

```typescript
import { CustomObjectSchemaInput } from "@apideck/unify/models/components";

let value: CustomObjectSchemaInput = {
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the custom object schema                                                                                                                    | project                                                                                                                                                 |
| `description`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The description of the custom object schema                                                                                                             | This schema defines a project custom object                                                                                                             |
| `fields`                                                                                                                                                | [components.Fields](../../models/components/fields.md)[]                                                                                                | :heavy_minus_sign:                                                                                                                                      | The fields defined in the schema                                                                                                                        |                                                                                                                                                         |
| `visible`                                                                                                                                               | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the custom object schema is visible in the UI                                                                                                   | true                                                                                                                                                    |
| `active`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the custom object schema is active                                                                                                              | true                                                                                                                                                    |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |