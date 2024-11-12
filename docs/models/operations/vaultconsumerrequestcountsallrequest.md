# VaultConsumerRequestCountsAllRequest

## Example Usage

```typescript
import { VaultConsumerRequestCountsAllRequest } from "apideck/models/operations";

let value: VaultConsumerRequestCountsAllRequest = {
  consumerId: "test_user_id",
  startDatetime: "2021-05-01T12:00:00.000Z",
  endDatetime: "2021-05-30T12:00:00.000Z",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `consumerId`                                             | *string*                                                 | :heavy_check_mark:                                       | ID of the consumer to return                             | test_user_id                                             |
| `startDatetime`                                          | *string*                                                 | :heavy_check_mark:                                       | Scopes results to requests that happened after datetime  | 2021-05-01T12:00:00.000Z                                 |
| `endDatetime`                                            | *string*                                                 | :heavy_check_mark:                                       | Scopes results to requests that happened before datetime | 2021-05-30T12:00:00.000Z                                 |