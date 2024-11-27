# BalanceSheetFilter

## Example Usage

```typescript
import { BalanceSheetFilter } from "@apideck/sdk/models/components";

let value: BalanceSheetFilter = {
  startDate: "2021-01-01",
  endDate: "2021-12-31",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `startDate`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | Filter by start date. If start date is given, end date is required. | 2021-01-01                                                          |
| `endDate`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | Filter by end date. If end date is given, start date is required.   | 2021-12-31                                                          |