# ConnectionConfiguration

## Example Usage

```typescript
import { ConnectionConfiguration } from "@apideck/unify/models/components";

let value: ConnectionConfiguration = {
  resource: "leads",
  defaults: [
    {
      id: "ProductInterest",
      options: [
        {
          label: "General Channel",
          options: [
            {
              label: "General Channel",
              value: "general",
              optionType: "simple",
            },
          ],
          optionType: "group",
        },
      ],
      value: "GC5000 series",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resource`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | leads                                                                            |
| `defaults`                                                                       | [components.ConnectionDefaults](../../models/components/connectiondefaults.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |