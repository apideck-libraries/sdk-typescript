# TimeOffRequestsFilter

## Example Usage

```typescript
import { TimeOffRequestsFilter } from "@apideck/unify/models/components";

let value: TimeOffRequestsFilter = {
  startDate: "2022-04-08",
  endDate: "2022-04-21",
  updatedSince: "2020-09-30T07:43:32.000Z",
  employeeId: "1234",
  timeOffRequestStatus: "approved",
  companyId: "1234",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `startDate`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Start date                                                                         | 2022-04-08                                                                         |
| `endDate`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | End date                                                                           | 2022-04-21                                                                         |
| `updatedSince`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Minimum date the time off request was last created or modified                     | 2020-09-30T07:43:32.000Z                                                           |
| `employeeId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | Employee ID                                                                        | 1234                                                                               |
| `timeOffRequestStatus`                                                             | [components.TimeOffRequestStatus](../../models/components/timeoffrequeststatus.md) | :heavy_minus_sign:                                                                 | Time off request status to filter on                                               | requested                                                                          |
| `companyId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Company ID                                                                         | 1234                                                                               |