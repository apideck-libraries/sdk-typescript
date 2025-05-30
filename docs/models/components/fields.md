# Fields

## Example Usage

```typescript
import { Fields } from "@apideck/unify/models/components";

let value: Fields = {
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | field_123                                                                                      |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | project_name                                                                                   |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | Name of the project                                                                            |
| `type`                                                                                         | [components.CustomObjectSchemaType](../../models/components/customobjectschematype.md)         | :heavy_minus_sign:                                                                             | N/A                                                                                            | string                                                                                         |
| `required`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            | true                                                                                           |
| `options`                                                                                      | [components.CustomObjectSchemaOptions](../../models/components/customobjectschemaoptions.md)[] | :heavy_minus_sign:                                                                             | Options for select and multiselect types                                                       |                                                                                                |
| `defaultValue`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Default value for the field                                                                    | New Project                                                                                    |