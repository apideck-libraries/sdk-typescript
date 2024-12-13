# AgedReportFilter

## Example Usage

```typescript
import { AgedReportFilter } from "@apideck/unify/models/components";

let value: AgedReportFilter = {
  customerId: "123abc",
  reportAsOfDate: "2024-01-01",
  periodCount: 3,
  periodLength: 30,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `customerId`                                              | *string*                                                  | :heavy_minus_sign:                                        | Filter by customer id                                     | 123abc                                                    |
| `reportAsOfDate`                                          | *string*                                                  | :heavy_minus_sign:                                        | The cutoff date for considering transactions              | 2024-01-01                                                |
| `periodCount`                                             | *number*                                                  | :heavy_minus_sign:                                        | Number of periods to split the aged creditors report into | 3                                                         |
| `periodLength`                                            | *number*                                                  | :heavy_minus_sign:                                        | Length of each period in days                             | 30                                                        |