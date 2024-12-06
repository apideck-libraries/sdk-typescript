# ProbationPeriod

## Example Usage

```typescript
import { ProbationPeriod } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: ProbationPeriod = {
  startDate: new RFCDate("2021-10-01"),
  endDate: new RFCDate("2021-11-28"),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `startDate`                                                               | [RFCDate](../../types/rfcdate.md)                                         | :heavy_minus_sign:                                                        | The date that the employee started their probation period at the company. | 2021-10-01                                                                |
| `endDate`                                                                 | [RFCDate](../../types/rfcdate.md)                                         | :heavy_minus_sign:                                                        | The date that the employee ended their probation period at the company.   | 2021-11-28                                                                |