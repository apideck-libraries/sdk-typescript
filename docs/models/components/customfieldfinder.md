# CustomFieldFinder

## Example Usage

```typescript
import { CustomFieldFinder } from "@apideck/sdk/models/components";

let value: CustomFieldFinder = {
  id: "123456",
  name: "SSN",
  description: "Employee Level",
  value: "495172776",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | Custom Field ID                                                                           | 123456                                                                                    |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | Custom Field name to use as a label if provided                                           | SSN                                                                                       |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | More information about the custom field                                                   | Employee Level                                                                            |
| `value`                                                                                   | *any*                                                                                     | :heavy_minus_sign:                                                                        | Custom Field value                                                                        | 495172776                                                                                 |
| `finder`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | JSONPath finder for retrieving this value when mapping a response payload from downstream |                                                                                           |