# SupportedProperty

## Example Usage

```typescript
import { SupportedProperty } from "@apideck/unify/models/components";

let value: SupportedProperty = {
  unifiedProperty: "owner_id",
  childProperties: [
    {
      unifiedProperty: "owner_id",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `unifiedProperty`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | Name of the property in our Unified API.                                       | owner_id                                                                       |
| `childProperties`                                                              | [components.SupportedProperty](../../models/components/supportedproperty.md)[] | :heavy_minus_sign:                                                             | List of child properties of the unified property.                              |                                                                                |