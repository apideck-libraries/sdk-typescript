# ResponsibilityMatrix

## Example Usage

```typescript
import { ResponsibilityMatrix } from "@apideck/unify/models/components";

let value: ResponsibilityMatrix = {
  area: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `area`                                           | *string*                                         | :heavy_check_mark:                               | The responsibility area.                         |
| `apideck`                                        | *string*                                         | :heavy_minus_sign:                               | Apideck's responsibility for this area.          |
| `consumer`                                       | *string*                                         | :heavy_minus_sign:                               | The consumer's responsibility for this area.     |
| `customer`                                       | *string*                                         | :heavy_minus_sign:                               | The end customer's responsibility for this area. |