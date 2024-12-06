# Schedule

## Example Usage

```typescript
import { Schedule } from "@apideck/unify/models/components";

let value: Schedule = {
  id: "12345",
  startDate: "2022-04-08",
  endDate: "2022-04-21",
  workPattern: {
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
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | A unique identifier for an object.                               | 12345                                                            |
| `startDate`                                                      | *string*                                                         | :heavy_check_mark:                                               | The start date, inclusive, of the schedule period.               | 2022-04-08                                                       |
| `endDate`                                                        | *string*                                                         | :heavy_check_mark:                                               | The end date, inclusive, of the schedule period.                 | 2022-04-21                                                       |
| `workPattern`                                                    | [components.WorkPattern](../../models/components/workpattern.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |