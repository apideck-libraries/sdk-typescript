# ConnectorDoc

## Example Usage

```typescript
import { ConnectorDoc } from "@apideck/sdk/models/components";

let value: ConnectorDoc = {
  id: "12345",
  name: "connection",
  url:
    "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | A unique identifier for an object.                                              | 12345                                                                           |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Name of the doc.                                                                | connection                                                                      |
| `audience`                                                                      | [components.Audience](../../models/components/audience.md)                      | :heavy_minus_sign:                                                              | Audience for the doc.                                                           |                                                                                 |
| `format`                                                                        | [components.Format](../../models/components/format.md)                          | :heavy_minus_sign:                                                              | Format of the doc.                                                              |                                                                                 |
| `url`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | Link to fetch the content of the doc.                                           | https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection |