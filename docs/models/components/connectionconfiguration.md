# ConnectionConfiguration

## Example Usage

```typescript
import { ConnectionConfiguration } from "@apideck/sdk/models/components";

let value: ConnectionConfiguration = {
  resource: "leads",
  defaults: [
    {
      id: "ProductInterest",
      options: [
        {
          label: "General Channel",
          value: [
            "team",
            "general",
          ],
        },
      ],
      value: 10,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resource`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | leads                                                                            |
| `defaults`                                                                       | [components.ConnectionDefaults](../../models/components/connectiondefaults.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |