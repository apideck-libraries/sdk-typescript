# Configuration

## Example Usage

```typescript
import { Configuration } from "apideck/models/components";

let value: Configuration = {
  resource: "leads",
  defaults: [
    {
      target: "custom_fields",
      id: "ProductInterest",
      options: [
        {
          label: "General Channel",
          value: "general",
        },
      ],
      value: true,
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `resource`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | leads                                                        |
| `defaults`                                                   | [components.Defaults](../../models/components/defaults.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |