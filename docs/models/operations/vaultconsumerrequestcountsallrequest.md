# VaultConsumerRequestCountsAllRequest

## Example Usage

```typescript
import { VaultConsumerRequestCountsAllRequest } from "@apideck/unify/models/operations";

let value: VaultConsumerRequestCountsAllRequest = {
  consumerId: "test_user_id",
  startDatetime: "start_datetime_example",
  endDatetime: "end_datetime_example",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `appId`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The ID of your Unify application                         | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                  |
| `consumerId`                                             | *string*                                                 | :heavy_check_mark:                                       | ID of the consumer to return                             | test_user_id                                             |
| `startDatetime`                                          | *string*                                                 | :heavy_check_mark:                                       | Scopes results to requests that happened after datetime  | start_datetime_example                                   |
| `endDatetime`                                            | *string*                                                 | :heavy_check_mark:                                       | Scopes results to requests that happened before datetime | end_datetime_example                                     |