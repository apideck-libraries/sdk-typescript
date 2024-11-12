# ConnectionConfiguration

## Example Usage

```typescript
import { ConnectionConfiguration } from "apideck/models/components";

let value: ConnectionConfiguration = {
  resource: "leads",
  defaults: [
    {
      id: "ProductInterest",
      options: [
        {
          id: "1234",
          label: "General Channel",
          options: [
            {
              label: "General Channel",
              value: 12.5,
            },
          ],
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resource`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | leads                                                                            |
| `defaults`                                                                       | [components.ConnectionDefaults](../../models/components/connectiondefaults.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |