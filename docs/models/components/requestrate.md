# RequestRate

The rate at which requests for resources will be made to downstream.

## Example Usage

```typescript
import { RequestRate } from "apideck/models/components";

let value: RequestRate = {
  rate: 310381,
  size: 373035,
  unit: "hour",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `rate`                                             | *number*                                           | :heavy_check_mark:                                 | The number of requests per window unit.            |
| `size`                                             | *number*                                           | :heavy_check_mark:                                 | Size of request window.                            |
| `unit`                                             | [components.Unit](../../models/components/unit.md) | :heavy_check_mark:                                 | The window unit for the rate.                      |