# ConnectionDefaults

## Example Usage

```typescript
import { ConnectionDefaults } from "apideck/models/components";

let value: ConnectionDefaults = {
  id: "ProductInterest",
  options: [
    {
      id: "1234",
      label: "General Channel",
      options: [
        {
          label: "General Channel",
          value: true,
        },
      ],
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