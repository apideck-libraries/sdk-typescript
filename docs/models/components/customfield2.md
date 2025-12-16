# CustomField2

## Example Usage

```typescript
import { CustomField2 } from "@apideck/unify/models/components";

let value: CustomField2 = {
  id: "2389328923893298",
  name: "employee_level",
  description: "Employee Level",
  value: "Uses Salesforce and Marketo",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_minus_sign:                      | Unique identifier for the custom field. | 2389328923893298                        |
| `name`                                  | *string*                                | :heavy_check_mark:                      | Name of the custom field.               | employee_level                          |
| `description`                           | *string*                                | :heavy_minus_sign:                      | More information about the custom field | Employee Level                          |
| `value`                                 | *components.CustomFieldValue*           | :heavy_minus_sign:                      | N/A                                     |                                         |