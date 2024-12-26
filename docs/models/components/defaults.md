# Defaults

## Example Usage

```typescript
import { Defaults } from "@apideck/unify/models/components";

let value: Defaults = {
  target: "custom_fields",
  id: "ProductInterest",
  options: [
    {
      id: "1234",
      label: "General Channel",
      options: [
        {
          label: "General Channel",
          value: 123,
        },
      ],
    },
  ],
  value: "GC5000 series",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `target`                                               | [components.Target](../../models/components/target.md) | :heavy_minus_sign:                                     | N/A                                                    | custom_fields                                          |
| `id`                                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | ProductInterest                                        |
| `options`                                              | *components.FormFieldOption*[]                         | :heavy_minus_sign:                                     | N/A                                                    |                                                        |
| `value`                                                | *components.ConnectionValue*                           | :heavy_minus_sign:                                     | N/A                                                    |                                                        |