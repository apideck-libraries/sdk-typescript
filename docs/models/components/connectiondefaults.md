# ConnectionDefaults

## Example Usage

```typescript
import { ConnectionDefaults } from "@apideck/unify/models/components";

let value: ConnectionDefaults = {
  id: "ProductInterest",
  options: [
    {
      label: "General Channel",
      value: 123,
      optionType: "simple",
    },
  ],
  value: true,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_minus_sign:             | N/A                            | ProductInterest                |
| `options`                      | *components.FormFieldOption*[] | :heavy_minus_sign:             | N/A                            |                                |
| `value`                        | *components.ConnectionValue*   | :heavy_minus_sign:             | N/A                            |                                |