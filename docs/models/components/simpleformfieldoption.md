# SimpleFormFieldOption

## Example Usage

```typescript
import { SimpleFormFieldOption } from "@apideck/unify/models/components";

let value: SimpleFormFieldOption = {
  label: "General Channel",
  value: 123,
  optionType: "simple",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `label`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | General Channel                                                |
| `value`                                                        | *components.SimpleFormFieldOptionValue*                        | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `optionType`                                                   | [components.OptionType](../../models/components/optiontype.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |