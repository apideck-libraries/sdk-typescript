# ConnectorSetting

## Example Usage

```typescript
import { ConnectorSetting } from "apideck/models/components";

let value: ConnectorSetting = {
  id: "pipeline_id",
  label: "Pipeline",
  type: "select",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | pipeline_id                                                                        |
| `label`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | Pipeline                                                                           |
| `type`                                                                             | [components.ConnectorSettingType](../../models/components/connectorsettingtype.md) | :heavy_minus_sign:                                                                 | N/A                                                                                | select                                                                             |