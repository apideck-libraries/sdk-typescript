# PayrollsFilter

## Example Usage

```typescript
import { PayrollsFilter } from "@apideck/unify/models/components";

let value: PayrollsFilter = {
  startDate: "2022-04-08",
  endDate: "2022-04-21",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `startDate`                                              | *string*                                                 | :heavy_minus_sign:                                       | Return payrolls whose pay period is after the start date | 2022-04-08                                               |
| `endDate`                                                | *string*                                                 | :heavy_minus_sign:                                       | Return payrolls whose pay period is before the end date  | 2022-04-21                                               |