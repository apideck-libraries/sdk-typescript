# CustomObjectSchema

## Example Usage

```typescript
import { CustomObjectSchema } from "@apideck/unify/models/components";

let value: CustomObjectSchema = {
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier of the custom object schema                                                                                                       | cos_12345                                                                                                                                               |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the custom object schema                                                                                                                    | project                                                                                                                                                 |
| `description`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The description of the custom object schema                                                                                                             | This schema defines a project custom object                                                                                                             |
| `fields`                                                                                                                                                | [components.Fields](../../models/components/fields.md)[]                                                                                                | :heavy_minus_sign:                                                                                                                                      | The fields defined in the schema                                                                                                                        |                                                                                                                                                         |
| `visible`                                                                                                                                               | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the custom object schema is visible in the UI                                                                                                   | true                                                                                                                                                    |
| `active`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the custom object schema is active                                                                                                              | true                                                                                                                                                    |
| `createdBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The ID of the user who created the custom object schema                                                                                                 | 12345                                                                                                                                                   |
| `updatedBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The ID of the user who last updated the custom object schema                                                                                            | 12345                                                                                                                                                   |
| `updatedAt`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The timestamp when the custom object schema was last updated                                                                                            | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The timestamp when the custom object schema was created                                                                                                 | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |