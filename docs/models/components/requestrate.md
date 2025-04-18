# RequestRate

The rate at which requests for resources will be made to downstream.

## Example Usage

```typescript
import { RequestRate } from "@apideck/unify/models/components";

let value: RequestRate = {
  rate: 48411,
  size: 900936,
  unit: "hour",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `rate`                                             | *number*                                           | :heavy_check_mark:                                 | The number of requests per window unit.            |
| `size`                                             | *number*                                           | :heavy_check_mark:                                 | Size of request window.                            |
| `unit`                                             | [components.Unit](../../models/components/unit.md) | :heavy_check_mark:                                 | The window unit for the rate.                      |