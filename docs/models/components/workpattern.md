# WorkPattern

## Example Usage

```typescript
import { WorkPattern } from "@apideck/sdk/models/components";

let value: WorkPattern = {
  oddWeeks: {
    hoursMonday: 8,
    hoursTuesday: 8,
    hoursWednesday: 4,
    hoursThursday: 7.5,
    hoursFriday: 4,
    hoursSaturday: 0,
    hoursSunday: 0,
  },
  evenWeeks: {
    hoursMonday: 8,
    hoursTuesday: 8,
    hoursWednesday: 4,
    hoursThursday: 7.5,
    hoursFriday: 4,
    hoursSaturday: 0,
    hoursSunday: 0,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `oddWeeks`                                                   | [components.OddWeeks](../../models/components/oddweeks.md)   | :heavy_minus_sign:                                           | N/A                                                          |
| `evenWeeks`                                                  | [components.EvenWeeks](../../models/components/evenweeks.md) | :heavy_minus_sign:                                           | N/A                                                          |