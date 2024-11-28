# CustomMapping

## Example Usage

```typescript
import { CustomMapping } from "@apideck/unify/models/components";

let value: CustomMapping = {
  id: "hris+employees+first_aid_training",
  label: "First Aid Training",
  description: "First Aid Training completed after 2019-01-01",
  value: "$.root.training.first_aid",
  key: "first_aid_training",
  required: false,
  customField: true,
  consumerId: "test_user_id",
  example: "Some value",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `id`                                                | *string*                                            | :heavy_minus_sign:                                  | Target Field ID                                     | hris+employees+first_aid_training                   |
| `label`                                             | *string*                                            | :heavy_minus_sign:                                  | Target Field name to use as a label                 | First Aid Training                                  |
| `description`                                       | *string*                                            | :heavy_minus_sign:                                  | Target Field description                            | First Aid Training completed after 2019-01-01       |
| `value`                                             | *string*                                            | :heavy_minus_sign:                                  | Target Field Mapping value                          | $.root.training.first_aid                           |
| `key`                                               | *string*                                            | :heavy_minus_sign:                                  | Target Field Key                                    | first_aid_training                                  |
| `required`                                          | *boolean*                                           | :heavy_minus_sign:                                  | Target Field Mapping is required                    | false                                               |
| `customField`                                       | *boolean*                                           | :heavy_minus_sign:                                  | This mapping represents a finder for a custom field | true                                                |
| `consumerId`                                        | *string*                                            | :heavy_minus_sign:                                  | Consumer ID                                         | test_user_id                                        |
| `example`                                           | *string*                                            | :heavy_minus_sign:                                  | Target Field Mapping example value from downstream  | Some value                                          |