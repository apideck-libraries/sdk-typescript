# FormFieldOptionGroup

## Example Usage

```typescript
import { FormFieldOptionGroup } from "@apideck/unify/models/components";

let value: FormFieldOptionGroup = {
  id: "1234",
  label: "General Channel",
  options: [
    {
      label: "General Channel",
      value: "general",
      optionType: "simple",
    },
  ],
  optionType: "group",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | 1234                                                                                                   |
| `label`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | General Channel                                                                                        |
| `options`                                                                                              | [components.SimpleFormFieldOption](../../models/components/simpleformfieldoption.md)[]                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `optionType`                                                                                           | [components.FormFieldOptionGroupOptionType](../../models/components/formfieldoptiongroupoptiontype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |