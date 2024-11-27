# ConsumerRequestCountsInDateRangeResponseData

## Example Usage

```typescript
import { ConsumerRequestCountsInDateRangeResponseData } from "@apideck/sdk/models/components";

let value: ConsumerRequestCountsInDateRangeResponseData = {
  applicationId: "1111",
  consumerId: "test_user_id",
  startDatetime: "2021-05-01T12:00:00.000Z",
  endDatetime: "2021-05-10T12:00:00.000Z",
  aggregatedRequestCount: 40,
  requestCounts: {
    unify: 100,
    proxy: 10,
    vault: 21,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `applicationId`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 1111                                                                                   |
| `consumerId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | test_user_id                                                                           |
| `startDatetime`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2021-05-01T12:00:00.000Z                                                               |
| `endDatetime`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2021-05-10T12:00:00.000Z                                                               |
| `aggregatedRequestCount`                                                               | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 40                                                                                     |
| `requestCounts`                                                                        | [components.RequestCountAllocation](../../models/components/requestcountallocation.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |