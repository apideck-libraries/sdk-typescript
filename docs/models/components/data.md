# Data

## Example Usage

```typescript
import { Data } from "@apideck/unify/models/components";

let value: Data = {
  consumerId: "test_consumer_id",
  applicationId: "1111",
  metadata: {
    accountName: "SpaceX",
    userName: "Elon Musk",
    email: "elon@musk.com",
    image: "https://www.spacex.com/static/images/share.jpg",
  },
  aggregatedRequestCount: 101,
  requestCounts: {
    unify: 100,
    proxy: 10,
    vault: 21,
  },
  created: "2021-05-07T12:55:42.242Z",
  modified: "2021-05-07T12:55:42.242Z",
  requestCountUpdated: "2021-05-07T12:55:42.242Z",
  services: [
    "salesforce",
    "stripe",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `consumerId`                                                                                                          | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | test_consumer_id                                                                                                      |
| `applicationId`                                                                                                       | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | 1111                                                                                                                  |
| `metadata`                                                                                                            | [components.ConsumerMetadata](../../models/components/consumermetadata.md)                                            | :heavy_minus_sign:                                                                                                    | The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. |                                                                                                                       |
| `aggregatedRequestCount`                                                                                              | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | 101                                                                                                                   |
| `requestCounts`                                                                                                       | [components.RequestCountAllocation](../../models/components/requestcountallocation.md)                                | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `created`                                                                                                             | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | 2021-05-07T12:55:42.242Z                                                                                              |
| `modified`                                                                                                            | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | 2021-05-07T12:55:42.242Z                                                                                              |
| `requestCountUpdated`                                                                                                 | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | 2021-05-07T12:55:42.242Z                                                                                              |
| `services`                                                                                                            | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | [<br/>"salesforce",<br/>"stripe"<br/>]                                                                                |