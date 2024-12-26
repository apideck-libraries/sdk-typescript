# Configuration

## Example Usage

```typescript
import { Configuration } from "@apideck/unify/models/components";

let value: Configuration = {
  resource: "leads",
  defaults: [
    {
      target: "custom_fields",
      id: "ProductInterest",
      options: [
        {
          label: "General Channel",
          value: 123,
        },
      ],
      value: [
        "GC6000 series",
      ],
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `resource`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | leads                                                        |
| `defaults`                                                   | [components.Defaults](../../models/components/defaults.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |