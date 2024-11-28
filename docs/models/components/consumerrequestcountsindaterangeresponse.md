# ConsumerRequestCountsInDateRangeResponse

Consumers Request Counts within Date Range

## Example Usage

```typescript
import { ConsumerRequestCountsInDateRangeResponse } from "@apideck/unify/models/components";

let value: ConsumerRequestCountsInDateRangeResponse = {
  statusCode: 200,
  status: "OK",
  data: {
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
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | HTTP Response Status Code                                                                                                          | 200                                                                                                                                |
| `status`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | HTTP Response Status                                                                                                               | OK                                                                                                                                 |
| `data`                                                                                                                             | [components.ConsumerRequestCountsInDateRangeResponseData](../../models/components/consumerrequestcountsindaterangeresponsedata.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |